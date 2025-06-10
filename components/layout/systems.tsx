import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Systems = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-600 font-semibold mb-2">OUR FOCUS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Occupational <span className="text-orange-600">Health</span> &
              <br />
              Safety <span className="text-orange-600">Policy</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Bagong Transport adalah salah satu perusahaan yang bergerak
              dibidang transportasi bus antar kota dan propinsi, memulai usaha
              pada tahun 1994. Seiring dengan kebutuhan transportasi di
              pertambangan, pada tahun 1998 mulai memasuki usaha transportasi di
              dunia pertambangan. Dan kami juga memberikan pelayanan khusus
              dalam usaha memenuhi kebutuhan dengan membuat bus 4x4 yang sangat
              cocok dioperasikan di medan tambang dengan mengutamakan segi
              keselamatan dan kenyamanan bagi penumpang.
            </p>
            <p className="text-gray-600 mb-8">
              PT Bagong Transport merupakan penyedia layanan transportasi
              terpercaya di Indonesia, berkomitmen untuk menghadirkan kenyamanan
              dan keselamatan dalam setiap perjalanan.
            </p>
            <div className="flex space-x-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                REQUEST SERVICE
              </Button>
              <Button variant="outline" className="border-gray-300">
                LEARN MORE
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/hero-bagong.jpg"
              alt="Technician working on fire equipment"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Systems;
