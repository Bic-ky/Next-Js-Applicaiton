import { NextResponse } from 'next/server';

const BASE = process.env.API_BASE_URL!;
const TOKEN = process.env.API_BEARER_TOKEN || '';

export async function GET() {
  try {
    const headers: Record<string, string> = {};
    if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

    // Using "quotes" as a stand-in for asked questions
    const res = await fetch(`${BASE}/quotes?limit=4`, { headers, cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch questions');

    const json = await res.json();
    const now = Date.now();

    const timeAgo = (idx: number) =>
      ['2 mins ago','10 mins ago','25 mins ago','1 hour ago'][idx] || 'just now';

    const questions = (json?.quotes ?? []).map((q: any, i: number) => ({
      id: q.id ?? i + 1,
      question: q.quote,
      askedBy: q.author || 'Staff',
      time: timeAgo(i),
      timestamp: now - (i + 1) * 60_000,
    }));

    return NextResponse.json({ questions });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 });
  }
}
