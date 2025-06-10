"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Twitter, Linkedin } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useSession, signOut } from "next-auth/react";

import { Button } from "../ui/button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { data: session } = useSession();

  // Handle scroll effect for transparent header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="w-full">
      <nav
        className={`absolute top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${
          isScrolled || isMenuOpen
            ? "bg-stone-900/95 backdrop-blur-sm"
            : "bg-transparent"
        }`}>
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={130}
            height={120}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-md font-medium text-white hover:text-white/80">
            Home
          </Link>
          <Link
            href="/about"
            className="text-md font-medium text-white hover:text-white/80">
            About
          </Link>

          <Link
            href="/blog"
            className="text-md font-medium text-white hover:text-white/80">
            Blogs
          </Link>
          <Link
            href="/contact"
            className="text-md font-medium text-white hover:text-white/80">
            Contact Us
          </Link>

          {session && session.user?.name === "Ariska Adi" && (
            <>
              <Link
                href="/admin"
                className="text-md font-medium text-white hover:text-white/80">
                Dashboard
              </Link>
            </>
          )}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {session ? (
            <>
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={session?.user?.image || ""}
                  alt={session?.user?.name || ""}
                />
                <AvatarFallback>
                  {session.user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2) || "CN"}
                </AvatarFallback>
              </Avatar>
              <Button
                className="bg-white text-red-600 hover:backdrop-blur-2xl hover:text-white hover:bg-red-600 border-2 border-red-600"
                onClick={() => signOut()}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="#" className="text-md text-white hover:text-white/80">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-md text-white hover:text-white/80">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-md text-white hover:text-white/80">
                <Linkedin className="h-4 w-4" />
              </Link>

              <Button
                className="bg-white text-black hover:backdrop-blur-2xl hover:text-white hover:bg-white/20"
                asChild>
                <Link href="signIn">Sign In</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-stone-900/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden pt-20`}>
        <div className="container mx-auto px-4 py-8 flex flex-col h-full">
          <div className="flex flex-col space-y-6 text-center">
            <Link
              href="/"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            <Link
              href="/blog"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-white py-2 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            {session && session.user?.name === "Ariska Adi" && (
              <Link
                href="/admin"
                className="text-lg font-medium text-white py-2 border-b border-white/10"
                onClick={() => setIsMenuOpen(false)}>
                Dashboard
              </Link>
            )}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center text-white">
                {session ? (
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={session.user?.image || ""}
                        alt={session.user?.name || ""}
                      />
                      <AvatarFallback>
                        {session.user?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2) || "CN"}
                      </AvatarFallback>
                    </Avatar>
                    <Button
                      className="bg-white text-red-600 hover:backdrop-blur-2xl hover:text-white hover:bg-red-600"
                      onClick={() => signOut()}>
                      Sign Out
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button
                      className="bg-white text-black hover:backdrop-blur-2xl hover:text-white hover:bg-white/20 "
                      asChild>
                      <Link href="signIn">Sign In</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-white hover:text-white/80">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-white hover:text-white/80">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
