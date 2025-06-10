import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import BlogCardSection from "./blog-card-section";

const Blog = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2">OUR BLOG</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            News & Tips
          </h2>
        </div>

        <BlogCardSection />

        <div className="mt-8 flex justify-center">
          <Button className="w-40  bg-red-600" asChild>
            <Link href="/blog">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
