'use client';

import React from 'react';
import {
  Calendar,
  Users,
  FileText,
  TrendingUp,
  UserCheck,
  Clock,
  AlertCircle,
} from 'lucide-react';

const stats = [
  { title: "Today's Appointments", value: '12', icon: Calendar, color: 'bg-blue-500', change: '+2' },
  { title: 'Active Patients', value: '248', icon: Users, color: 'bg-green-500', change: '+15' },
  { title: 'Pending Reports', value: '6', icon: FileText, color: 'bg-yellow-500', change: '-3' },
  { title: 'Revenue (Month)', value: '$12,450', icon: TrendingUp, color: 'bg-purple-500', change: '+8%' },
];

const recentAppointments = [
  { id: 1, patient: 'John Smith', time: '09:00 AM', type: 'Consultation', status: 'confirmed' },
  { id: 2, patient: 'Sarah Johnson', time: '10:30 AM', type: 'Follow-up', status: 'pending' },
  { id: 3, patient: 'Mike Davis', time: '02:00 PM', type: 'Check-up', status: 'confirmed' },
  { id: 4, patient: 'Emma Wilson', time: '03:30 PM', type: 'Consultation', status: 'pending' },
  { id: 5, patient: 'David Brown', time: '04:15 PM', type: 'Treatment', status: 'confirmed' },
];

const recentQuestions = [
  { id: 1, question: 'What are today’s available slots?', time: '2 mins ago', askedBy: 'Nurse Admin' },
  { id: 2, question: 'How many reports are pending?', time: '10 mins ago', askedBy: 'Lab Staff' },
  { id: 3, question: 'Show active patients this week', time: '25 mins ago', askedBy: 'Reception' },
  { id: 4, question: 'Monthly revenue breakdown?', time: '1 hour ago', askedBy: 'Finance Dept' },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          Reynolds Clinic — {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from yesterday</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Appointments + Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Appointments</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {recentAppointments.slice(0, 4).map((apt) => (
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
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Question
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Asked By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
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
      </div>
    </div>
  );
}
