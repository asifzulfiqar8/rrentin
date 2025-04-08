import Dropdown from "@/components/shared/small/Dropdown";
import Input from "@/components/shared/small/Input";
import { useState } from "react";
import MyMap from "./MyMap";

const BasicInfo = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const [streetAddress, setStreetAddress] = useState("thailand");

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    streetAddress
  )}&output=embed`;
  return (
    <div>
      <h4 className="text-center text-textColor text-base md:text-lg font-medium">
        Property Information
      </h4>
      <form className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-12">
          <Dropdown
            label="Type of property"
            options={[{ option: "Condo", value: "condo" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Input label="Project Name" shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Region"
            options={[{ option: "Condo", value: "condo" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Buildings can be shown in (Days)"
            options={[{ option: "Withing 7 days", value: "7-days" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Buildings can be shown in (Hours)"
            options={[{ option: "Withing 12 hours", value: "12-hours" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Location"
            options={[{ option: "Thailand", value: "thailand" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Sub district"
            options={[{ option: "Thailand", value: "thailand" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-12">
          <Input
            label="Street Address (Optional)"
            name="streetAddress"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </div>
        {/* MAP (iframe) */}
        <div className="lg:col-span-12 h-[300px] md:h-[400px]">
          <MyMap location={streetAddress} />

        </div>
        <div className="lg:col-span-12 flex justify-end gap-[14px]">
          <button
            onClick={handleNext}
            className="cursor-pointer py-[10px] px-5 rounded-sm bg-primary text-white text-sm md:text-base font-medium"
          >
            Next
          </button>
        </div>
      </form>

    </div>
  );
};

export default BasicInfo;
