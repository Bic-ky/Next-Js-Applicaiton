'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { RefreshCw, Search, Filter, Clock, UserCheck } from 'lucide-react';

type Appointment = {
  id: number;
  patient: string;
  time: string;
  type: string;
  status: 'confirmed' | 'pending';
};

export default function AppointmentsPage() {
  const [data, setData] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  // UI state
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<'all' | 'confirmed' | 'pending'>('all');
  const [page, setPage] = useState(1);
  const pageSize = 8;

  // fetcher
  const fetchAppointments = async (signal?: AbortSignal) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch('/api/clinic/appointments', { cache: 'no-store', signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json.appointments ?? []);
    } catch (e: any) {
      if (e?.name !== 'AbortError') setErr(e?.message ?? 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ac = new AbortController();
    fetchAppointments(ac.signal);
    return () => ac.abort();
  }, []);

  // derived lists
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.filter((a) => {
      const matchesQ =
        !q ||
        a.patient.toLowerCase().includes(q) ||
        a.type.toLowerCase().includes(q) ||
        a.time.toLowerCase().includes(q);
      const matchesStatus = status === 'all' ? true : a.status === status;
      return matchesQ && matchesStatus;
    });
  }, [data, query, status]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pageSlice = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, currentPage]);

  const onRefresh = () => {
    setPage(1);
    const ac = new AbortController();
    fetchAppointments(ac.signal);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Appointments</h2>
        <button
          onClick={onRefresh}
          className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </div>

      {/* Controls */}
      <div className="px-6 py-4 border-b border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by patient, type, or time..."
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
            <Filter className="w-5 h-5 text-gray-400" />
          </div>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value as any);
              setPage(1);
            }}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="all">All statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div className="text-sm text-gray-500 flex items-center">
          <span className="mr-2">Results:</span>
          <span className="font-medium">{filtered.length}</span>
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="p-6 space-y-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-12 bg-gray-100 animate-pulse rounded" />
          ))}
        </div>
      ) : err ? (
        <div className="p-6 text-sm text-red-600">Failed to load appointments: {err}</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pageSlice.map((apt) => (
                  <tr key={apt.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-gray-400" />
                      {apt.patient}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{apt.type}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {apt.time}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          apt.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {apt.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {pageSlice.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-6 py-10 text-center text-sm text-gray-500">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100">
            <div className="text-sm text-gray-500">
              Page <span className="font-medium">{currentPage}</span> of{' '}
              <span className="font-medium">{totalPages}</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1.5 text-sm rounded-md border border-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1.5 text-sm rounded-md border border-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
