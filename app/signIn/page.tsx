import { LoginButton } from "@/components/atoms/login-button";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In | Kamarinn",
};

const page = async () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url(/empty-seat.jpg)",
      }}>
      {/* <div className="relative inset-0 bg-black/50"></div> */}
      <div className="flex min-h-screen items-center justify-center z-10 px-4 mb-14 backdrop-blur-3xl">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full text-center space-y-4 ">
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          {/* <LoginButton redirectUrl={redirectUrl} /> */}
          <LoginButton />
        </div>
      </div>
    </div>
  );
};

export default page;
