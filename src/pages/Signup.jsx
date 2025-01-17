import { SignupForm } from "@/components/signup-form";
import React from "react";

const Signup = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-muted p-2 ">
      <div className="w-full h-fit max-w-sm md:max-w-3xl">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
