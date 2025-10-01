'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type Msg = { type: 'success' | 'error'; text: string } | null;

function normalizeErrorText(errBody: any): string {
  // FastAPI can send: {"detail": "simple string"}
  if (typeof errBody?.detail === 'string') return errBody.detail;

  if (Array.isArray(errBody?.detail)) {
    const msgs = errBody.detail
      .map((d:any) => {
        if (typeof d === 'string') return d;
        if (d?.msg && typeof d.msg === 'string') return d.msg;
        try {
          return JSON.stringify(d);
        } catch {
          return String(d);
        }
      })
      .filter(Boolean);
    if (msgs.length) return msgs.join('\n');
  }

  // Or: {message:"..."} or generic
  if (typeof errBody?.message === 'string') return errBody.message;

  try {
    return JSON.stringify(errBody);
  } catch {
    return 'Request failed';
  }
}

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Msg>(null);
  const router = useRouter();

  const API_BASE =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:8000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (newPassword !== confirmPassword) {
      setMessage({
        type: 'error',
        text: 'New password and confirmation do not match.',
      });
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem('accessToken') ?? '';
      const res = await fetch(`${API_BASE}/users/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token ? `Bearer ${token}` : '',
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });

      if (!res.ok) {
        // Try to parse JSON error; fallback to HTTP status text
        const body = await res.json().catch(() => null);
        const text = body ? normalizeErrorText(body) : `HTTP ${res.status}`;
        throw new Error(text);
      }

      // 204 success
      setMessage({ type: 'success', text: 'Password updated successfully!' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        router.push('/login');
      }, 1800);
    } catch (err: any) {
      setMessage({
        type: 'error',
        text: err?.message ?? 'Failed to update password',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Change Password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {message && (
          <div
            className={`text-sm whitespace-pre-line ${
              message.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  );
}
