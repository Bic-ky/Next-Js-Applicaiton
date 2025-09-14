'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Calendar as CalendarIcon, RefreshCw } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';

type KPIs = {
  totals: {
    appointments: number;
    activePatients: number;
    avgWaitMin: number;
    completionRatePct: number;
    revenueThisMonth: number;
  };
  series: {
    appointmentsByDay: { date: string; count: number }[];
    revenueByWeek: { week: string; amount: number }[];
  };
  distribution: {
    byService: { name: string; value: number }[];
  };
};

const RANGE_OPTS = [
  { label: '7d', value: '7' },
  { label: '30d', value: '30' },
  { label: '90d', value: '90' },
] as const;

export default function AnalyticsPage() {
  const [range, setRange] = useState<'7'|'30'|'90'>('30');
  const [data, setData] = useState<KPIs | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  const fetchData = async (signal?: AbortSignal) => {
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(`/api/clinic/analytics?range=${range}`, { cache: 'no-store', signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      if (e?.name !== 'AbortError') setErr(e?.message ?? 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const ac = new AbortController();
    fetchData(ac.signal);
    return () => ac.abort();
  }, [range]);

  const COLORS = useMemo(
    () => ['#8884d8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57'],
    []
  );

  const formatCurrency = (n?: number) =>
    typeof n === 'number'
      ? n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
      : '—';

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header + filters */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-semibold text-gray-900">Doctor Analytics</h2>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" /> Last {range} days
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-md border border-gray-300 overflow-hidden">
            {RANGE_OPTS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setRange(opt.value)}
                className={`px-3 py-1.5 text-sm ${
                  range === opt.value ? 'bg-gray-100 font-medium' : 'bg-white hover:bg-gray-50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => fetchData()}
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-50"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Loading / error */}
      {loading && (
        <div className="p-6 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-28 bg-gray-100 animate-pulse rounded" />
          ))}
        </div>
      )}
      {err && <div className="p-6 text-sm text-red-600">Failed to load analytics: {err}</div>}

      {!loading && !err && data && (
        <>
          {/* KPI cards */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <KpiCard title="Appointments" value={data.totals.appointments.toString()} />
            <KpiCard title="Active Patients" value={data.totals.activePatients.toString()} />
            <KpiCard title="Avg. Wait Time" value={`${data.totals.avgWaitMin} min`} />
            <KpiCard title="Completion Rate" value={`${data.totals.completionRatePct}%`} />
            <KpiCard title="Revenue (Month)" value={formatCurrency(data.totals.revenueThisMonth)} />
          </div>

          {/* Charts */}
          <div className="px-6 pb-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Appointments by day */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 xl:col-span-2">
              <h3 className="text-base font-medium text-gray-900 mb-2">Appointments per day</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data.series.appointmentsByDay}>
                    <defs>
                      <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis allowDecimals={false} />
                    <Tooltip />
                    <Area type="monotone" dataKey="count" stroke="#8884d8" fill="url(#colorA)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Service distribution */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-base font-medium text-gray-900 mb-2">Services mix</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data.distribution.byService}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={100}
                      label
                    >
                      {data.distribution.byService.map((_, i) => (
                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Revenue by week */}
          <div className="px-6 pb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="text-base font-medium text-gray-900 mb-2">Revenue by week</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data.series.revenueByWeek}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip formatter={(v: number) => formatCurrency(v)} />
                    <Bar dataKey="amount" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/** Small KPI card component */
function KpiCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
