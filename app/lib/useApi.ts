'use client';

import { useEffect, useRef, useState } from 'react';

type Options = {
  retry?: number;           // default 1
  retryDelayMs?: number;    // default 500
};

export function useApi<T>(path: string, { retry = 1, retryDelayMs = 500 }: Options = {}) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    let mounted = true;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const run = async () => {
      setLoading(true);
      setError(null);

      let attempts = 0;
      while (attempts <= retry) {
        try {
          const res = await fetch(path, { signal: controller.signal, cache: 'no-store' });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const json = await res.json();
          if (!mounted) return;
          setData(json);
          setLoading(false);
          return;
        } catch (e: any) {
          if (controller.signal.aborted) return;
          attempts += 1;
          if (attempts > retry) {
            setError(e?.message ?? 'Request failed');
            setLoading(false);
            return;
          }
          await new Promise(r => setTimeout(r, retryDelayMs));
        }
      }
    };

    run();
    return () => {
      mounted = false;
      controller.abort();
    };
  }, [path, retry, retryDelayMs]);

  return { data, loading, error };
}
