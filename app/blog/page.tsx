import BlogCardSection from "@/components/layout/blog-card-section";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Blog | Bagong",
};

const page = () => {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center"
        style={{
          backgroundImage: "url(/empty-seat.jpg)",
        }}>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* <Header /> */}
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Blogs
          </h1>
          <div className="flex items-center text-white/80 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>News & Blogs</span>
          </div>
        </div>
      </div>
      {/* blog section */}

      <div className="container mx-auto px-4 md:px-6 py-12">
        <BlogCardSection />
      </div>
    </main>
  );
};

export default page;
