import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "@/auth";

export const LoginButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}>
      <Button
        className="w-full flex items-center justify-center gap-2 bg-white border text-black hover:bg-gray-100"
        type="submit">
        <FcGoogle className="w-5 h-5" />
        Continue with Google
      </Button>
    </form>
  );
};
