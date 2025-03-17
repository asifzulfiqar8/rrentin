"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "../shared/small/Button";
import Input from "../shared/small/Input";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="bg-white p-5 lg:py-8 lg:px-[8%] rounded-xl w-full"
      onSubmit={handleForm}
    >
      <h6 className="text-center md:text-left text-xl lg:text-2xl font-semibold text-text-textColor">
        Forgot Password
      </h6>
      <div className="mt-5 lg:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-12">
          <Input
            label="Email address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="lg:col-span-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6">
          <Button
            width="w-full md:w-[184px]"
            height="h-[43px]"
            text="Send Reset Link"
            type="submit"
          />
          <div className="text-sm lg:text-base text-[#666666]">
            Don’t have an Account?{" "}
            <Link href="/signup" className="text-primary font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
