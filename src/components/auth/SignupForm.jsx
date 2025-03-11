"use client";

import { useState } from "react";
import Button from "../shared/small/Button";
import Input from "../shared/small/Input";
import PhoneInput from "react-phone-input-2";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Dropdown from "../shared/small/Dropdown";
import Link from "next/link";

const options = [
  { option: "Property Owner", value: "property-owner" },
  { option: "Tenant", value: "tenant" },
];

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    agreeToTerms: false,
    consent: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const isFormValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.password.trim() !== "" &&
    formData.role.trim() !== "";

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
        Sign up now
      </h6>
      <div className="mt-5 lg:mt-7 grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-6">
          <Input
            label="First name"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="lg:col-span-6">
          <Input
            label="Last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="lg:col-span-9">
          <Input
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="lg:col-span-3 flex items-end">
          <Button text="Verify Email" height="h-[40px] md:h-[56px]" />
        </div>
        <div className="lg:col-span-12">
          <PhoneInput
            country={"us"}
            value={formData.phone}
            onChange={(phone) => setFormData((prev) => ({ ...prev, phone }))}
            containerClass="phone-input-container"
            inputClass="phone-input-field"
            buttonClass="phone-input-button"
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
        <div className="lg:col-span-12">
          <Dropdown
            label="Register As"
            name="role"
            options={options}
            value={formData.role}
            onSelect={(option) =>
              setFormData((prev) => ({ ...prev, role: option.value }))
            }
          />
        </div>
        <div className="lg:col-span-12">
          <CheckBox
            name="agreeToTerms"
            label={
              <>
                By creating an account, I agree to our{" "}
                <Link href="" className="underline">
                  Terms of use
                </Link>{" "}
                and{" "}
                <Link href="" className="underline">
                  Privacy Policy
                </Link>
              </>
            }
            checked={formData.agreeToTerms}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="lg:col-span-12">
          <CheckBox
            name="consent"
            label="By creating an account, I am also consenting to receive SMS messages and emails, including product new feature updates, events, and marketing promotions."
            checked={formData.consent}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className="lg:col-span-12 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6">
          <Button
            width="w-full md:w-[184px]"
            height="h-[43px]"
            text="Sign up"
            type="submit"
            disabled={!isFormValid}
            cn={isFormValid ? "" : "opacity-50 cursor-not-allowed"}
          />
          <div className="text-sm lg:text-base text-[#666666]">
            Already have an Account?{" "}
            <Link href="/login" className="text-[#0245A5] font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;

const CheckBox = ({ label, checked, onChange, name }) => {
  return (
    <label className="flex items-start gap-2 cursor-pointer">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="cursor-pointer mt-[3px]"
      />
      <span className="text-sm lg:text-base text-[#333333CC] leading-5">
        {label}
      </span>
    </label>
  );
};
