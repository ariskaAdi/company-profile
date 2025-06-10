"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type BlogDetailProps = {
  postId: string;
};

type Post = {
  _id: string;
  title: string;
  content: string;
  imageUrl: string;
  _createdAt: string;
};

const BlogDetail = ({ postId }: BlogDetailProps) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/${postId}`);
        if (!res.ok) return notFound();
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (postId) fetchPost();
  }, [postId]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!post) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
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
        <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
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
    </main>
  );
};

export default BlogDetail;
