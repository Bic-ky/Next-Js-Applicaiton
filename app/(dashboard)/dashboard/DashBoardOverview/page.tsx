// DashboardOverview.tsx
'use client';

import React, { useMemo, useState, useRef, useEffect } from 'react';
import { Mail, Users, FileText, Bell, Search } from 'lucide-react';
import { useApi } from '@/app/lib/useApi';
import Link from 'next/link';

type Stat = { title: string; value: string };
type ContactMessage = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  preferred_time?: string;
  message?: string;
  status: 'new' | 'read' | 'archived';
  created_at: string; // ISO
};
type Blog = { id: number; title: string; image?: string };

/** Minimal drag-to-scroll hook that supports mouse + touch */
function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (clientX: number) => {
      isDown = true;
      startX = clientX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
      el.style.cursor = 'grabbing';
      el.style.userSelect = 'none';
    };
    const onMove = (clientX: number) => {
      if (!isDown) return;
      const x = clientX - el.offsetLeft;
      const walk = x - startX;
      el.scrollLeft = scrollLeft - walk;
    };
    const onUp = () => {
      isDown = false;
      el.style.cursor = '';
      el.style.userSelect = '';
    };

    const isFormEl = (target: EventTarget | null) => {
      const tag = (target as HTMLElement)?.tagName;
      return tag && ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(tag);
    };

    // Mouse
    const mDown = (e: MouseEvent) => { if (!isFormEl(e.target)) onDown(e.pageX); };
    const mMove = (e: MouseEvent) => onMove(e.pageX);
    const mUp = () => onUp();
    const mLeave = () => onUp();

    // Touch
    const tStart = (e: TouchEvent) => onDown(e.touches[0].pageX);
    const tMove = (e: TouchEvent) => onMove(e.touches[0].pageX);
    const tEnd = () => onUp();

    el.addEventListener('mousedown', mDown);
    window.addEventListener('mousemove', mMove);
    window.addEventListener('mouseup', mUp);
    el.addEventListener('mouseleave', mLeave);

    el.addEventListener('touchstart', tStart, { passive: true });
    el.addEventListener('touchmove', tMove, { passive: true });
    el.addEventListener('touchend', tEnd);

    return () => {
      el.removeEventListener('mousedown', mDown);
      window.removeEventListener('mousemove', mMove);
      window.removeEventListener('mouseup', mUp);
      el.removeEventListener('mouseleave', mLeave);

      el.removeEventListener('touchstart', tStart);
      el.removeEventListener('touchmove', tMove);
      el.removeEventListener('touchend', tEnd);
    };
  }, []);

  return ref;
}

export default function DashboardOverview() {
  const { data: statsRes, loading: statsLoading, error: statsError, status: statsHttp } =
    useApi<{ stats: Stat[] }>('/dashboard/stats', { retry: 1 });

  const { data: messagesRes, loading: msgsLoading, error: msgsError, status: msgsHttp } =
    useApi<{ messages: ContactMessage[] }>('/dashboard/recent-messages', { retry: 1 });

  const { data: blogsRes, loading: blogsLoading, error: blogsError, status: blogsHttp } =
    useApi<{ blogs: Blog[] }>('/dashboard/recent-blogs', { retry: 1 });

  const stats = statsRes?.stats ?? [];
  const messages = messagesRes?.messages ?? [];
  const blogs = blogsRes?.blogs ?? [];

  const [msgQuery, setMsgQuery] = useState('');

  const normalized = useMemo(() => messages, [messages]);

  const filteredSortedTop10 = useMemo(() => {
    const q = msgQuery.trim().toLowerCase();
    const filtered = q
      ? normalized.filter((m) => {
          const hay = [
            m.name,
            m.email,
            m.phone,
            m.service,
            m.message,
            m.status,
            m.preferred_time,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
          return hay.includes(q);
        })
      : normalized;

    const sorted = [...filtered].sort((a, b) => {
      const da = new Date(a.created_at).getTime();
      const db = new Date(b.created_at).getTime();
      return db - da;
    });

    return sorted.slice(0, 10);
  }, [normalized, msgQuery]);

  const scrollRef = useDragScroll<HTMLDivElement>();

  const iconColors = ['bg-blue-500','bg-green-500','bg-purple-500','bg-yellow-500'];

  const prettyError = (e?: unknown) =>
    typeof e === 'string' ? e : (e as any)?.message ?? 'Unknown error';

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Clinic Dashboard</h1>
        <div className="text-sm text-gray-500">{new Date().toLocaleDateString()}</div>
      </div>

      {/* Errors */}
      {(statsError || msgsError || blogsError) && (
        <div className="p-4 rounded-md bg-red-50 text-red-700 text-sm">
          {statsError && <div>Stats error ({statsHttp}): {prettyError(statsError)}</div>}
          {msgsError && <div>Messages error ({msgsHttp}): {prettyError(msgsError)}</div>}
          {blogsError && <div>Blogs error ({blogsHttp}): {prettyError(blogsError)}</div>}
          <div className="mt-1 text-gray-500">Check the URL paths and router mounting in FastAPI.</div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsLoading && Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse h-28" />
        ))}
        {!statsLoading && stats.map((s, i) => {
          const Icon = [Mail, Users, FileText, Bell][i % 4];
          const color = iconColors[i % iconColors.length];
          return (
            <div key={i} className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{s.title}</p>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
              </div>
              <div className={`${color} p-3 rounded-full`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Messages */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            Patient Messages (Newest 10)
          </h3>

          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={msgQuery}
              onChange={(e) => setMsgQuery(e.target.value)}
              placeholder="Search name, email, service..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Search messages"
            />
          </div>
        </div>

        {/* Loading */}
        {msgsLoading && (
          <div className="p-6 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-10 bg-gray-100 animate-pulse rounded" />
            ))}
          </div>
        )}

        {/* Error */}
        {!msgsLoading && msgsError && (
          <div className="px-6 py-4 text-sm text-red-600">
            Failed to load messages: {prettyError(msgsError)}
          </div>
        )}

        {/* Table */}
        {!msgsLoading && !msgsError && (
          <div
            ref={scrollRef}
            className="overflow-x-auto -mx-4 sm:mx-0 px-4 cursor-grab active:cursor-grabbing select-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
            aria-label="Drag left or right to scroll table"
            role="region"
          >
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Received</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSortedTop10.map((m) => {
                  const dt = new Date(m.created_at);
                  const date = dt.toLocaleDateString();
                  const time = dt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                  return (
                    <tr key={m.id} className="hover:bg-gray-50">
                      {/* Received */}
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        <time dateTime={m.created_at} title={dt.toLocaleString()}>
                          {date} {time}
                        </time>
                      </td>

                      {/* Patient */}
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 truncate">{m.name}</div>
                      </td>

                      {/* Contact */}
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="truncate">{m.email}</div>
                        {m.phone && <div className="text-gray-400">{m.phone}</div>}
                      </td>

                      {/* Topic */}
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {m.service || <span className="text-gray-400">—</span>}
                        {m.preferred_time && <span className="ml-2 text-gray-400">· {m.preferred_time}</span>}
                      </td>

                      {/* Message preview */}
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-[320px]">
                        <div className="line-clamp-2">{m.message || <span className="text-gray-400">—</span>}</div>
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                            m.status === 'new'
                              ? 'bg-blue-100 text-blue-800'
                              : m.status === 'read'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {m.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}

                {filteredSortedTop10.length === 0 && (
                  <tr>
                    <td className="px-6 py-8 text-center text-sm text-gray-500" colSpan={6}>
                      No messages found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Recent Blogs */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recent Blog Posts</h3>
        </div>
        {blogsLoading ? (
          <div className="p-6 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 bg-gray-100 animate-pulse rounded" />
            ))}
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {blogs.map((b) => (
              <div key={b.id} className="px-6 py-4 flex items-center justify-between">
                <p className="font-medium text-gray-900 truncate">{b.title}</p>
                <Link href={`/blog/${b.id}`} className="text-blue-600 hover:underline text-sm">View</Link>
              </div>
            ))}
            {blogs.length === 0 && (
              <div className="px-6 py-4 text-sm text-gray-500">No blog posts.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
