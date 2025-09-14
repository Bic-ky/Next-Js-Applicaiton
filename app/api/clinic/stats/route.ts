import { NextResponse } from 'next/server';

const BASE = process.env.API_BASE_URL!;
const TOKEN = process.env.API_BEARER_TOKEN || '';

export async function GET() {
  try {
    const headers: Record<string, string> = {};
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    // Hit a couple of lightweight dummy endpoints in parallel
    const [usersRes, postsRes, todosRes] = await Promise.all([
      fetch(`${BASE}/users?limit=250`, { headers, cache: 'no-store' }),
      fetch(`${BASE}/posts?limit=50`, { headers, cache: 'no-store' }),
      fetch(`${BASE}/todos?limit=50`, { headers, cache: 'no-store' }),
    ]);

    if (!usersRes.ok || !postsRes.ok || !todosRes.ok) {
      throw new Error('Upstream fetch failed');
    }

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const todos = await todosRes.json();

    // Shape into your dashboard's stat cards
    const data = [
      { title: "Today's Appointments", value: String(Math.min(20, (todos?.total ?? 12) % 20) || 12), change: '+2' },
      { title: 'Active Patients', value: String(users?.total ?? 248), change: '+15' },
      { title: 'Pending Reports', value: String((posts?.total ?? 6) % 12 || 6), change: '-3' },
      { title: 'Revenue (Month)', value: '$12,450', change: '+8%' },
    ];

    return NextResponse.json({ stats: data });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}
