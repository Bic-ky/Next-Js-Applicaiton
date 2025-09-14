'use client';

import React from 'react';
import { Calendar, Users, FileText, TrendingUp, UserCheck, Clock, AlertCircle } from 'lucide-react';
import { useApi } from '@/app/lib/useApi';

type Stat = { title: string; value: string; change: string };
type Appointment = { id: number; patient: string; time: string; type: string; status: 'confirmed'|'pending' };
type Question = { id: number; question: string; askedBy: string; time: string };

export default function DashboardOverview() {
  const { data: statsRes, loading: statsLoading, error: statsError } = useApi<{ stats: Stat[] }>('/api/clinic/stats', { retry: 1 });
  const { data: apptRes, loading: apptLoading, error: apptError } = useApi<{ appointments: Appointment[] }>('/api/clinic/appointments', { retry: 1 });
  const { data: qRes, loading: qLoading, error: qError } = useApi<{ questions: Question[] }>('/api/clinic/questions', { retry: 1 });

  const stats = statsRes?.stats ?? [];
  const appointments = apptRes?.appointments ?? [];
  const recentQuestions = qRes?.questions ?? [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Reynolds Clinic — {new Date().toLocaleDateString()}</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsLoading && Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 animate-pulse h-32" />
        ))}
        {statsError && <div className="col-span-full text-sm text-red-600">Failed to load stats: {statsError}</div>}
        {!statsLoading && !statsError && stats.map((stat, i) => {
          const Icon = [Calendar, Users, FileText, TrendingUp][i % 4];
          const color = ['bg-blue-500','bg-green-500','bg-yellow-500','bg-purple-500'][i % 4];
          return (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from yesterday</p>
                </div>
                <div className={`${color} p-3 rounded-full`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Appointments + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Appointments</h3>
          </div>

          {apptLoading && (
            <div className="p-6 space-y-4">
              {Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-14 bg-gray-100 animate-pulse rounded" />)}
            </div>
          )}
          {apptError && <div className="px-6 py-4 text-sm text-red-600">Failed to load appointments: {apptError}</div>}

          {!apptLoading && !apptError && (
            <div className="divide-y divide-gray-200">
              {appointments.slice(0, 4).map((apt) => (
                <div key={apt.id} className="px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <UserCheck className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-gray-900">{apt.patient}</p>
                      <p className="text-sm text-gray-500">{apt.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{apt.time}</span>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        apt.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
          </div>
          <div className="p-6 space-y-4">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              New Appointment
            </button>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
              Add Patient
            </button>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors">
              Generate Report
            </button>
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <AlertCircle className="w-4 h-4 mr-2" />
                <span>6 pending reports need attention</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Asked / Searched Questions */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Recently Asked / Searched Questions</h3>
        </div>

        {qLoading && (
          <div className="p-6 space-y-3">
            {Array.from({ length: 4 }).map((_, i) => <div key={i} className="h-10 bg-gray-100 animate-pulse rounded" />)}
          </div>
        )}
        {qError && <div className="px-6 py-4 text-sm text-red-600">Failed to load questions: {qError}</div>}

        {!qLoading && !qError && (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asked By</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentQuestions.map((q) => (
                  <tr key={q.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">{q.question}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{q.askedBy}</td>
                    <td className="px-6 py-4 text-sm text-gray-400">{q.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
