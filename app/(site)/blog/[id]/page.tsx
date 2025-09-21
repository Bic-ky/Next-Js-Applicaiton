import { notFound } from "next/navigation";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.API_BASE_URL ||
  "http://127.0.0.1:8000";

export const dynamic = "force-dynamic";

async function fetchBlogPostById(id: string) {
  try {
    const res = await fetch(`${API_BASE}/blogs/${id}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const ct = res.headers.get("content-type") ?? "";
    if (!ct.includes("application/json")) return null;
    return (await res.json()) as {
      id: number;
      title: string;
      content: string;
      image: string;
      owner_id: number;
      author: string | null;
    };
  } catch (e) {
    console.error("API fetch failed:", e);
    return null;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchBlogPostById(params.id);
  if (!post) notFound();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.image && (
        <img src={post.image} alt={post.title} className="w-full h-auto mb-6 rounded-lg" />
      )}
      <div className="prose lg:prose-xl whitespace-pre-wrap">{post.content}</div>
      <p className="mt-4 text-gray-700">Author: {post.author ?? "Unknown"}</p>
    </div>
  );
}
