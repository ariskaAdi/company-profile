import React from "react";

const Membership = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold mb-2">CERTIFICATIONS</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proud Member
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Bagong Bus Company is proudly certified and affiliated with leading
            transport and safety organizations to ensure compliance, safety, and
            quality service for all our passengers.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-8 md:space-x-12">
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">DOT</span>
          </div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">FTA</span>
          </div>
          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold">ISO 39001</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
