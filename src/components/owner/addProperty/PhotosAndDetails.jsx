'use client'
import Dropdown from "@/components/shared/small/Dropdown";
import Input from "@/components/shared/small/Input";
import Textarea from "@/components/shared/small/Textarea";
import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

const PhotosAndDetails = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setCurrentStep((prevStep) => prevStep - 1);

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
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
    event.stopPropagation(); // ✅ Stop event bubbling to parent
    handleClick();
  };

  return (
    <div>
      <h4 className="text-center text-textColor text-base md:text-lg font-medium">
        Photos & Details
      </h4>
      <form className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-12">
          <Input label="Property Title" shadow />
        </div>
        <div className="lg:col-span-12">
          <Input label="Project Name" shadow />
        </div>
        <div className="lg:col-span-12">
          <Textarea
            label="Description"
            placeholder="Enter a description for the image..."
            shadow={true}
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Type of property"
            options={[{ option: "Condo", value: "condo" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Input type="date" label="Project Name" shadow />
        </div>

        <div className="lg:col-span-12 grid grid-cols-12 gap-4">
          
          <div
            className="col-span-6 flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <AiOutlineCloudUpload className="w-10 h-10 text-primary" />
            <p className="text-[#32343C] text-xs mt-2">
              Click here to upload your ownership documents
            </p>
            <p className="text-[#32343C] text-sm mt-2">
              (Condo Title Deed, House Book, Land Title, Etc.)
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageUpload}
            />
            <button
              type="button" // ✅ Add this line
              onClick={handleButtonClick}
              className="mt-3 px-4 py-2 bg-primary text-white rounded-lg cursor-pointer hover:bg-blue-600"
            >
              Browse
            </button>
          </div>


          <div className="col-span-6 flex items-center justify-center">
            {image ? (
              <div className="relative w-full h-[180px] p-4 border-2 border-dashed border-gray-300 rounded-lg">
                <Image
                  src={image}
                  alt="Uploaded"
                  layout="fill"          // Makes the image fill the parent container
                  objectFit="cover"      // Ensures the image covers the container without distortion
                  className="rounded-lg" // Optional: adds rounded corners
                />
              </div>
            ) : (
              <div className="w-full h-full p-4 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
                <AiOutlineCloudUpload className="w-10 h-10 text-primary" />
                <p className="text-[#32343C] text-xs mt-2">No image uploaded yet</p>
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

export default PhotosAndDetails;
