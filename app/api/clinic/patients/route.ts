import { NextResponse } from 'next/server';

const BASE = process.env.API_BASE_URL || 'https://dummyjson.com';
const TOKEN = process.env.API_BEARER_TOKEN || '';

export async function GET() {
  try {
    const headers: Record<string, string> = {};
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    // Dummy users as stand-in for patients
    const res = await fetch(`${BASE}/users?limit=50`, { headers, cache: 'no-store' });
    if (!res.ok) throw new Error(`Upstream error: ${res.status}`);

    const json = await res.json();
    const patients = (json?.users ?? []).map((u: any, i: number) => ({
      id: u.id ?? i + 1,
      firstName: u.firstName ?? 'Unknown',
      lastName: u.lastName ?? '',
      email: u.email ?? '',
      phone: u.phone ?? '',
      age: u.age ?? undefined,
      status: i % 4 === 0 ? 'inactive' : 'active', // simple demo status
    }));

    return NextResponse.json({ patients });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}
