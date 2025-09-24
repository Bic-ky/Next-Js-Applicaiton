// app/blog/[id]/page.tsx
import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';

// ====== CONFIG ======
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://127.0.0.1:8000';

// ====== TYPES ======
type Blog = {
  id: number;
  title: string;
  content: string;
  image: string | null;
  owner_id: number | null;
  owner : string | null;
  author?: string | null;
  created_at?: string | null;
  updated_at?: string | null;
};

// ====== DATA FETCH ======
async function getBlog(id: string): Promise<Blog> {
  const res = await fetch(`${API_BASE}/blogs/${id}`, {
    cache: 'no-store', // fresh content for detail pages
    headers: { accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`Failed to load blog ${id}`);
  return res.json();
}

// ====== SEO: generateMetadata ======
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  try {
    const blog = await getBlog(params.id);
    const title = blog.title ?? 'Blog';
    const description =
      (blog.content ?? '')
        .slice(0, 160)
        .replace(/\s+/g, ' ')
        .trim() || 'Read our latest article.';
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
    const url = `${siteUrl}/blog/${blog.id}`;
    const images = blog.image ? [blog.image] : [];

    return {
      title,
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        url,
        type: 'article',
        images,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images,
      },
    };
  } catch {
    return {
      title: 'Blog',
      description: 'Read our latest article.',
    };
  }
}

// ====== PAGE ======
export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getBlog(params.id);

  // Fallbacks if backend doesn't include these
  const authorName = blog.author ?? 'Unknown Author';
  const publishedISO = blog.created_at ?? null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const pageUrl = `${siteUrl}/blog/${blog.id}`;

  // ====== JSON-LD for SEO (no dangerouslySetInnerHTML needed) ======
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    image: blog.image ? [blog.image] : undefined,
    author: authorName ? { '@type': 'Person', name: authorName } : undefined,
    datePublished: publishedISO ?? undefined,
    dateModified: blog.updated_at ?? publishedISO ?? undefined,
    mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
    publisher: {
      '@type': 'Organization',
      name: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Reynolds Clinic',
      logo: {
        '@type': 'ImageObject',
        url:
          process.env.NEXT_PUBLIC_SITE_LOGO ??
          `${siteUrl}/logo.png`,
      },
    },
    description:
      (blog.content ?? '')
        .slice(0, 160)
        .replace(/\s+/g, ' ')
        .trim() || 'Read our latest article.',
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Blogs', item: `${siteUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: blog.title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* JSON-LD blocks (React safely renders string children in <script> tags) */}
      <Script id="article-jsonld" type="application/ld+json">
        {JSON.stringify(articleJsonLd)}
      </Script>
      <Script id="breadcrumb-jsonld" type="application/ld+json">
        {JSON.stringify(breadcrumbJsonLd)}
      </Script>

      {/* HERO: full-bleed image + gradient overlay + readable header card */}
      <section aria-label="Article header" className="relative w-full">
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] w-full overflow-hidden">
          {blog.image ? (
            /* If using next/image with remote URLs, whitelist your API host:
               next.config.js -> images.remotePatterns for 127.0.0.1:8000 / localhost:8000 */
            <Image
              src={blog.image}
              alt={blog.title || 'Blog header image'}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Overlay text card for title/author/date */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-4 sm:p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                  {blog.title}
                </h1>
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  By <span className="font-medium text-gray-800">{authorName}</span>
                  {publishedISO ? (
                    <>
                      {' '}
                      • <time dateTime={publishedISO}>{new Date(publishedISO).toLocaleDateString()}</time>
                    </>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY: elevated card, industry-standard typography, justified paragraphs */}
      <section aria-label="Article content" className="relative">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <article className="bg-white -mt-6 sm:-mt-10 md:-mt-14 rounded-2xl shadow-sm p-5 sm:p-8 md:p-10">
            <div
              className="
                prose max-w-none
                prose-headings:text-gray-900
                prose-p:text-gray-700
                prose-li:text-gray-700
                prose-a:text-teal-600 hover:prose-a:text-teal-700
                prose-img:rounded-xl
                prose-hr:my-8
                md:prose-lg
              "
            >
              {/* Justified body text; preserves newlines from backend */}
              <p className="whitespace-pre-wrap text-justify">{blog.content}</p>
            </div>
          </article>
        </div>
      </section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
