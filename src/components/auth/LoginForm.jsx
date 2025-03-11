"use client";

import Link from "next/link";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../shared/small/Button";
import Input from "../shared/small/Input";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";

  const handleForm = (e) => {
    e.preventDefault();
    console.log("formData", formData);
  };

  return (
    <form
      className="bg-white p-5 lg:py-8 lg:px-[8%] rounded-xl w-full"
      onSubmit={handleForm}
    >
      <h6 className="text-center md:text-left text-xl lg:text-[32px] font-semibold text-[#32343C]">
        Login now
      </h6>
      <div className="mt-5 lg:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-12">
          <Input
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="lg:col-span-12 relative">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
          />
          <div
            className="absolute top-0 right-0 flex items-center gap-2 cursor-pointer text-sm lg:text-lg text-[#666666CC]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {!showPassword ? (
              <>
                <IoEyeOutline color="#666666CC" />
                Show
              </>
            ) : (
              <>
                <IoEyeOffOutline color="#666666CC" />
                Hide
              </>
            )}
          </div>
        </div>
        <div className="lg:col-span-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6">
          <Button
            width="w-full md:w-[184px]"
            height="h-[43px]"
            text="Login"
            type="submit"
            disabled={!isFormValid}
            cn={isFormValid ? "" : "opacity-50 cursor-not-allowed"}
          />
          <div className="text-sm lg:text-base text-[#666666]">
            Don’t have an Account?{" "}
            <Link href="/signup" className="text-[#0245A5] font-semibold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
