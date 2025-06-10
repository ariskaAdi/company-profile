import Link from "next/link";
import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetail from "@/components/layout/blog-detail";

export const metadata: Metadata = {
  title: "Detail Blog | Bagong",
};

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string }; // ⬅️ BUKAN Promise
}) {
  const postId = await params.id;
  if (!postId) return notFound();

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
            <span>Blog</span>
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-10 text-gray-500 text-md animate-pulse">
            Loading Data...
          </div>
        }>
        <BlogDetail postId={postId} />
      </Suspense>
    </main>
  );
}
