// app/blog/[id]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { POST_DETAIL_QUERY } from "@/sanity/lib/queries";
import ReactMarkdown from "react-markdown";

export const metadata: Metadata = {
  title: "Detail Blog | Bagong",
};

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogDetailPage({ params }: Props) {
  // Validasi ID
  if (!params.slug || typeof params.slug !== "string") {
    notFound();
  }

  const slug = params.slug;

  // Fetch dari Sanity
  const post = await client.fetch(POST_DETAIL_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{ backgroundImage: "url(/empty-seat.jpg)" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Detail Blog
          </h1>
          <div className="flex items-center text-white/80 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span>{post.title}</span>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-12">
          <Image
            src={post.imageUrl ?? "/placeholder.jpg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-8">
            {new Date(post._createdAt).toLocaleDateString()}
          </p>
          <ReactMarkdown>{post.content}</ReactMarkdown>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all News
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
