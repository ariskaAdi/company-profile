import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[700px] bg-cover bg-center pt-16 "
      style={{ backgroundImage: 'url("/empty-seat.jpg")' }}>
      <div className="container mx-auto px-12 md:py-28 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6 mt-4">
              <h1 className="text-3xl md:text-3xl lg:text-6xl font-sans text-shadow-neutral-950  text-white leading-tight">
                Travel Smarter,
                <br />
                Ride with <span className="text-orange-500">Confidence</span>
                ,
                <br />
                Choose Bagong
              </h1>
              <p className="text-md text-gray-400 max-w-md">
                Reliable and comfortable intercity transport, designed for your
                convenience. Book tickets in minutes and enjoy the journey.
              </p>
            </div>

            <Link href="/about" passHref>
              <Button className="flex items-center justify-center h-12 px-6 bg-orange-500 hover:bg-red-600 text-white rounded-4xl w-full max-w-md mb-8">
                <ArrowRight className="w-5 h-5 mr-2" />
                Discover More
              </Button>
            </Link>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative mt-20">
            <div className="relative z-10"></div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-amber-500 rounded-full opacity-80 z-20"></div>
            <div className="absolute top-1/4 -left-8 w-12 h-12 bg-red-400 rounded-full opacity-70"></div>
            <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-pink-400 rounded-full opacity-60"></div>

            {/* Floating Image Cards */}
            <div className="absolute top-8 right-8 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
              <Image
                src="/hero-bagong.jpg"
                alt="bagong"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-16 left-4 w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
              <Image
                src="/hero-bagong.jpg"
                alt="bagong"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
