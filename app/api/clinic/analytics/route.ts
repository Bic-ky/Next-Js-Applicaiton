import { NextResponse } from 'next/server';

const BASE = process.env.API_BASE_URL || 'https://dummyjson.com';
const TOKEN = process.env.API_BEARER_TOKEN || '';

function formatDate(d: Date) {
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function weekLabel(d: Date) {
  const start = new Date(d);
  start.setDate(d.getDate() - d.getDay()); // week start (Sun)
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return `${start.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}`;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const range = Number(searchParams.get('range') || '30'); // days

    const headers: Record<string, string> = {};
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    // Pull some lightweight proxies to seed mock analytics
    const [usersRes, postsRes, todosRes] = await Promise.all([
      fetch(`${BASE}/users?limit=200`, { headers, cache: 'no-store' }),
      fetch(`${BASE}/posts?limit=100`, { headers, cache: 'no-store' }),
      fetch(`${BASE}/todos?limit=100`, { headers, cache: 'no-store' }),
    ]);

    if (!usersRes.ok || !postsRes.ok || !todosRes.ok) {
      throw new Error('Upstream fetch failed');
    }

    const users = await usersRes.json();
    const posts = await postsRes.json();
    const todos = await todosRes.json();

    // --- Mock synthesis ---
    // Appointments per day
    const today = new Date();
    const appointmentsByDay: { date: string; count: number }[] = [];
    for (let i = range - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const seed = (d.getDate() + (users?.total ?? 100)) % 24;
      const count = 10 + (seed % 15); // 10-24
      appointmentsByDay.push({ date: formatDate(d), count });
    }

    // Revenue by week (aggregate daily counts * avg fee)
    const avgFee = 42; // pretend fee
    const revenueByWeek: { week: string; amount: number }[] = [];
    let i = 0;
    while (i < appointmentsByDay.length) {
      const chunk = appointmentsByDay.slice(i, i + 7);
      const sum = chunk.reduce((acc, x) => acc + x.count, 0) * avgFee;
      const baseDate = new Date(today);
      baseDate.setDate(today.getDate() - (appointmentsByDay.length - 1 - i));
      revenueByWeek.push({ week: weekLabel(baseDate), amount: sum });
      i += 7;
    }

    // Service mix (mapped from posts/todos lengths)
    const byService = [
      { name: 'Consultation', value: (posts?.total ?? 60) % 40 + 40 },
      { name: 'Check-up', value: (todos?.total ?? 80) % 35 + 30 },
      { name: 'Follow-up', value: 25 },
      { name: 'Treatment', value: 20 },
    ];

    // KPIs
    const totals = {
      appointments: appointmentsByDay.reduce((a, b) => a + b.count, 0),
      activePatients: users?.total ?? 180,
      avgWaitMin: 10 + ((todos?.total ?? 50) % 15), // 10-24 min
      completionRatePct: 90 + ((posts?.total ?? 10) % 7), // 90-96%
      revenueThisMonth: revenueByWeek.slice(-1)[0]?.amount ?? 0,
    };

    return NextResponse.json({
      totals,
      series: { appointmentsByDay, revenueByWeek },
      distribution: { byService },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}
