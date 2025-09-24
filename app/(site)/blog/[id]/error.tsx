// app/blog/[id]/error.tsx
'use client';
export default function Error({ error }: { error: Error }) {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-24">
      <h2 className="text-xl font-semibold mb-2">Couldn’t load this blog.</h2>
      <p className="text-gray-600">{error.message}</p>
    </div>
  );
}
