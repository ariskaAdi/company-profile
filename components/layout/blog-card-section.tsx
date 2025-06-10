"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

type Post = {
  _id: number;
  title: string;
  content: string;
  imageUrl: string;
  // Add other properties as needed
};
const BlogCardSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("/api/post", {
          method: "GET",
          cache: "no-store",
          next: { revalidate: 10 },
        });
        const data = await res.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    data();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin "></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return <div className="text-center py-8">No posts available</div>;
  }
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post._id} className="w-full">
          <Card className="hover:shadow-lg transition-shadow overflow-hidden rounded-lg p-0">
            <Link href={`/blog/${post._id}`} className="block">
              <Image
                src={post.imageUrl || "/placeholder.jpg"}
                alt={post.title}
                width={600}
                height={300}
                className="w-full h-64 object-cover"
                priority
              />
            </Link>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {post.title}
              </h3>
              <Link
                href={`/blog/${post._id}`}
                className="text-sm font-semibold text-red-600 hover:underline">
                READ MORE →
              </Link>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default BlogCardSection;
