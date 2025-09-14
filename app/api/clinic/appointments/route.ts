import { NextResponse } from 'next/server';

const BASE = process.env.API_BASE_URL!;
const TOKEN = process.env.API_BEARER_TOKEN || '';

export async function GET() {
  try {
    const headers: Record<string, string> = {};
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    const res = await fetch(`${BASE}/users?limit=5`, { headers, cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch appointments');
    const json = await res.json();

    // Map dummy users to your appointment shape
    const items = (json?.users ?? []).map((u: any, i: number) => ({
      id: u.id ?? i + 1,
      patient: `${u.firstName} ${u.lastName}`,
      time: ['09:00 AM','10:30 AM','02:00 PM','03:30 PM','04:15 PM'][i % 5],
      type: ['Consultation','Follow-up','Check-up','Consultation','Treatment'][i % 5],
      status: i % 2 === 0 ? 'confirmed' : 'pending',
    }));

    return NextResponse.json({ appointments: items });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}
