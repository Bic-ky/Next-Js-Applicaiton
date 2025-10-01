'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type UseApiOptions = {
  retry?: number;                // default 0 (no retries)
  method?: string;               // default GET
  body?: any;                    // for POST/PUT
  headers?: Record<string, string>;
  skip?: boolean;                // if true, don't fetch automatically
  deps?: any[];                  // extra deps to trigger refetch
  withAuth?: boolean;            // default true (send bearer token if present)
};

type UseApiState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  status?: number;
  refetch: () => Promise<void>;
};

const cleanJoin = (base: string, path: string) => {
  if (!base) return path;
  const b = base.endsWith('/') ? base.slice(0, -1) : base;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${b}${p}`;
};

const parseFastApiError = async (res: Response) => {
  try {
    const json = await res.json();
    if (json?.detail) {
      if (Array.isArray(json.detail)) {
        return json.detail.map((d: any) => d?.msg || JSON.stringify(d)).join('\n');
      }
      if (typeof json.detail === 'string') return json.detail;
      return JSON.stringify(json.detail);
    }
    return JSON.stringify(json);
  } catch {
    return res.statusText || 'Request failed';
  }
};

export function useApi<T = any>(path: string, opts: UseApiOptions = {}): UseApiState<T> {
  const {
    retry = 0,
    method = 'GET',
    body,
    headers = {},
    skip = false,
    deps = [],
    withAuth = true,
  } = opts;

  const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:8000';
  const url = useMemo(() => cleanJoin(BASE, path), [BASE, path]);
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(!skip);
  const abortRef = useRef<AbortController | null>(null);

  const doFetch = async () => {
    if (skip) return;
    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    setLoading(true);
    setError(null);

    let attempts = 0;
    const maxAttempts = Math.max(1, 1 + retry);

    while (attempts < maxAttempts) {
      attempts++;
      try {
        const token = (typeof window !== 'undefined' && withAuth)
          ? localStorage.getItem('accessToken')
          : null;

        const reqHeaders: Record<string, string> = {
          Accept: 'application/json',
          ...headers,
        };

        const isJsonBody = body && (typeof body === 'object') && !(body instanceof FormData);
        if (isJsonBody) reqHeaders['Content-Type'] = 'application/json';
        if (token) reqHeaders['Authorization'] = `Bearer ${token}`;

        const res = await fetch(url, {
          method,
          headers: reqHeaders,
          signal: ac.signal,
          body: isJsonBody ? JSON.stringify(body) : body,
        });

        setStatus(res.status);

        if (!res.ok) {
          // If 404: very likely wrong path or server not mounting this route
          const msg = await parseFastApiError(res);
          // Don’t retry 404/401 by default
          if (res.status === 404 || res.status === 401) {
            throw new Error(`${res.status} ${res.statusText} — ${msg}`);
          }
          // retry only for 5xx or transient network-ish responses
          if (res.status >= 500 && attempts < maxAttempts) {
            continue;
          }
          throw new Error(`${res.status} ${res.statusText} — ${msg}`);
        }

        // Try to parse JSON; allow empty 204
        const contentType = res.headers.get('content-type') || '';
        const json = contentType.includes('application/json') ? await res.json() : (null as any);
        setData(json as T);
        setLoading(false);
        return;
      } catch (err: any) {
        if (err?.name === 'AbortError') return; // component unmounted or new fetch
        if (attempts >= maxAttempts) {
          setError(err?.message || 'Request failed');
          setLoading(false);
          return;
        }
        // brief backoff
        await new Promise((r) => setTimeout(r, 250 * attempts));
      }
    }
  };

  useEffect(() => {
    doFetch();
    return () => abortRef.current?.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, skip, withAuth, JSON.stringify(headers), JSON.stringify(body), ...deps]);

  return { data, loading, error, status, refetch: doFetch };
}
