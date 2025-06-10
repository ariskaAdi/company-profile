import Blog from "@/components/layout/blog";
import Hero from "@/components/layout/hero";
import Membership from "@/components/layout/membership";
import Services from "@/components/layout/services";
import Systems from "@/components/layout/systems";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-50">
      <Hero />
      <div className="p-4 mt-12 bg-gray-50">
        <Systems />
        <Services />
        <Blog />
        <Membership />
      </div>
    </main>
  );
}
