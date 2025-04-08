'use client'
import Dropdown from "@/components/shared/small/Dropdown";
import Input from "@/components/shared/small/Input";
import InputDropdown from "@/components/shared/small/InputDropdown";
import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import { FaUser } from "react-icons/fa"; // Example icon from react-icons
import { AiOutlineCloudUpload } from "react-icons/ai";
import Image from "next/image";

const PropertyInfo = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setCurrentStep((prevStep) => prevStep - 1);
  const fileInputRef = useRef(null); // ✅ Define the ref
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // ✅ Prevent bubbling
    handleClick();
  };
  // Updated arrays for dropdown values
  const bedroomOptions = [
    { option: "1 Bedroom", value: "1" },
    { option: "2 Bedrooms", value: "2" },
    { option: "3 Bedrooms", value: "3" },
    { option: "4+ Bedrooms", value: "4plus" },
  ];

  const bathroomOptions = [
    { option: "1 Bathroom", value: "1" },
    { option: "2 Bathrooms", value: "2" },
    { option: "3+ Bathrooms", value: "3plus" },
  ];

  const frequencyOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "yearly", label: "Yearly" },
  ];

  const floorOptions = [
    { option: "Ground Floor", value: "ground" },
    { option: "1st Floor", value: "1st" },
    { option: "2nd Floor", value: "2nd" },
    { option: "3rd Floor", value: "3rd" },
  ];

  const conditionOptions = [
    { option: "Unfurnished", value: "unfurnished" },
    { option: "Semi Furnished", value: "semi_furnished" },
    { option: "Fully Furnished", value: "fully_furnished" },
  ];

  const buildingOptions = [
    { option: "Only 1 Building", value: "single" },
    { option: "Multiple Buildings", value: "multiple" },
  ];

  // Callback function when an option is selected
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <div>
      <h4 className="text-center text-textColor text-base md:text-lg font-medium">
        Property Information
      </h4>
      <form className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-6">
          <Dropdown
            placeholder="select"
            label="Bedrooms"
            options={bedroomOptions}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            placeholder="select"
            label="BathRooms"
            options={bathroomOptions}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <InputDropdown
            placeholder="0"
            label="Unit Area"
            options={frequencyOptions}
            defaultText=""
            onSelect={handleSelect}
            mainClassName="custom-dropdown"
            dropdownIcon={'SqM'}
            width="w--[79px]"
          />
        </div>
        <div className="lg:col-span-6">
          <Input placeholder="i. e A302" label="Unit Number (optional)" shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            placeholder="select"
            label="Floor"
            options={floorOptions}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            placeholder="Unfurnished"
            label="Property Condition"
            options={conditionOptions}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            placeholder="Only 1 Bldg"
            label="Building Your Property Located"
            options={buildingOptions}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <InputDropdown
            placeholder="0"
            label="Common Area Maintenance Fee"
            options={frequencyOptions}
            defaultText=""
            onSelect={handleSelect}
            mainClassName="custom-dropdown"
            dropdownIcon={'$ '}
            width="w--[79px]"
          />
        </div>
        <div className="lg:col-span-12">

          <div
            className="flex flex-col w-full items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <AiOutlineCloudUpload className="w-10 h-10 text-primary" />
            <p className="text-[#32343C] text-xs mt-2">Click here to upload your ownership documents</p>
            <p className="text-[#32343C] text-sm mt-2">(Condo Title Deed, House Book, Land Title, Etc.)</p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef} // ✅ Attach the ref here
              onChange={handleImageUpload}
            />

            <button
              type="button"
              onClick={handleButtonClick}
              className="mt-3 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-blue-600"
            >
              Browse
            </button>

            {image && (
              <div className="mt-3 w-40 h-40 relative">
                <Image
                  src={image}
                  alt="Uploaded"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-12 flex justify-end gap-[14px]">
          <button
            className="cursor-pointer py-[10px] px-5 rounded-sm bg-[#7C848DB2] text-white text-sm md:text-base font-medium"
            onClick={handlePrevious}
          >
            Previous
          </button>
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

export default PropertyInfo;

const CustomIcon = (
  <svg
    className="w-6 h-6 text-blue-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 2a8 8 0 108 8 8.009 8.009 0 00-8-8zm1 12H9v-2h2zm0-4H9V6h2z" />
  </svg>
);
