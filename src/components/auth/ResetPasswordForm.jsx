"use client";

import Link from "next/link";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../shared/small/Button";
import Input from "../shared/small/Input";
import toast from "react-hot-toast";

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Both passwords should be same");
    } else {
      console.log("formData", formData);
    }
  };

  return (
    <form
      className="bg-white p-5 lg:py-8 lg:px-[8%] rounded-xl w-full"
      onSubmit={handleForm}
    >
      <h6 className="text-center md:text-left text-xl lg:text-2xl font-semibold text-text-textColor">
        Reset Your Password
      </h6>
      <div className="mt-5 lg:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-12 relative">
          <Input
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={handleInputChange}
            autoComplete="new-password"
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
        <div className="lg:col-span-12 relative">
          <Input
            label="Confirm New Password"
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={handleInputChange}
            autoComplete="new-password"
          />
          <div
            className="absolute top-0 right-0 flex items-center gap-2 cursor-pointer text-sm lg:text-lg text-[#666666CC]"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {!showConfirmPassword ? (
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
            text="Reset"
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

export default ResetPasswordForm;
