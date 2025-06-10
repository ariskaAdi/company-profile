import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Kontak | Bagong",
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <div className="flex items-center text-white/80 text-sm">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>contact us</span>
          </div>
        </div>
      </div>

      {/* contact section */}
      <div className="container mx-auto px-4 md:px-6 py-12 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kiri - Info Kontak */}
          <div className="space-y-8">
            <div>
              <p className="text-gray-500 text-sm mb-4">/ hubungi kami /</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Kami siap membantu dan menjawab pertanyaan Anda
              </h1>
              <p className="text-gray-600 mb-8">
                Butuh bantuan pemesanan tiket atau informasi rute perjalanan?
                Tim Bagong siap mendampingi Anda kapan saja.
              </p>
            </div>

            {/* Call Center */}
            <div>
              <h3 className="font-bold text-lg mb-3">Call Center</h3>
              <div className="space-y-1">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>0800-123-456 (Bebas Pulsa)</span>
                </p>
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+62 812-3456-7890 (WhatsApp)</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-bold text-lg mb-3">Email</h3>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@bagongtrans.id</span>
              </p>
            </div>

            {/* Sosial Media */}
            <div>
              <h3 className="font-bold text-lg mb-3">Media Sosial</h3>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-gray-700" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="w-5 h-5 text-gray-700" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                </Link>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </div>
          </div>

          {/* Kanan - Form Kontak */}
          <div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Kirim Pesan</h2>
              <p className="text-gray-600 mb-6">
                Isi formulir di bawah untuk pertanyaan, kritik, atau saran. Kami
                akan segera menghubungi Anda.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap"
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
                <input
                  type="text"
                  placeholder="Subjek"
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
                <textarea
                  placeholder="Pesan Anda"
                  rows={4}
                  className="w-full p-3 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-700"
                />
                <div className="pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                    <span>Kirim Pesan</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2">
                      <path
                        d="M1.16699 7H12.8337"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 1.16699L12.8333 7.00033L7 12.8337"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
