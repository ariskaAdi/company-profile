import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "About | Bagong",
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
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <div className="flex items-center text-white/80 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* About section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            TENTANG KAMI.
          </h1>
        </div>

        {/* Grid: Sidebar + Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-1">
            <nav className="space-y-2 text-sm">
              <div className="font-medium text-gray-800">Profil</div>
              <div className="font-medium text-gray-800">Tim Kami</div>
              <div className="font-medium text-gray-800">Media</div>
            </nav>
          </div>

          <div className="md:col-span-3 p-2">
            <div className="max-w-3xl">
              <p className="text-sm mb-6">
                Bagong Bis adalah perusahaan transportasi darat yang telah
                melayani masyarakat Indonesia sejak tahun 1995. Dengan komitmen
                terhadap kenyamanan dan keselamatan penumpang, kami hadir di
                berbagai kota besar dan kecil dengan armada yang terus
                diperbarui.
              </p>
              <p className="text-sm mb-6">
                Kami percaya bahwa perjalanan yang baik dimulai dari pelayanan
                yang tulus. Oleh karena itu, kami terus mengembangkan inovasi
                dan teknologi untuk mendukung layanan transportasi yang aman,
                cepat, dan efisien. Didukung oleh tim profesional dan pengemudi
                berpengalaman, Bagong Bis adalah pilihan terbaik untuk setiap
                perjalanan darat Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <div className="text-4xl font-serif italic">
              <span className="text-5xl">“</span>
              <p className="my-4">
                Kami tidak hanya mengantar penumpang, kami mengantarkan harapan
                dan kebahagiaan ke tujuan mereka.
              </p>
              <div className="text-right">
                <span className="text-5xl">”</span>
              </div>
            </div>
            <p className="text-sm mt-2">— Direktur Utama, Bagong Bis</p>
          </div>
          <div>
            <Image
              src="/about-bagong.jpg"
              alt="armada bagong"
              width={600}
              height={400}
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/team-bagong.jpg"
              alt="Tim Bagong"
              width={500}
              height={500}
              className="w-full max-w-sm md:max-w-lg object-cover rounded-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">
              TIM KAMI.
            </h2>
            <div className="space-y-6 max-w-lg">
              <p className="text-sm text-gray-600">
                Kami terdiri dari individu-individu berdedikasi tinggi yang
                bekerja bersama untuk memastikan setiap perjalanan berjalan
                dengan aman dan nyaman. Setiap anggota tim membawa semangat
                melayani dan profesionalisme dalam setiap aspek pekerjaan.
              </p>
              <p className="text-sm text-gray-600">
                Dari pengemudi hingga petugas layanan pelanggan, kami semua
                memiliki satu tujuan: memberikan pengalaman perjalanan terbaik
                bagi Anda.
              </p>
            </div>

            {/* Statistik */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold">150+</div>
                <div className="text-xs text-gray-500">Armada Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">1.000.000+</div>
                <div className="text-xs text-gray-500">Penumpang per Tahun</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">95%</div>
                <div className="text-xs text-gray-500">Kepuasan Pelanggan</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">30+</div>
                <div className="text-xs text-gray-500">
                  Rute Antar Kota & Provinsi
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
