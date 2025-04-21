'use client';
import Dropdown from '@/components/shared/small/Dropdown';
import Input from '@/components/shared/small/Input';
import Textarea from '@/components/shared/small/Textarea';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const PhotosAndDetails = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep(prevStep => prevStep + 1);
  const handlePrevious = () => setCurrentStep(prevStep => prevStep - 1);

  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleDrop = event => {
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

  const handleButtonClick = event => {
    event.stopPropagation(); // ✅ Stop event bubbling to parent
    handleClick();
  };

  return (
    <div>
      <h4 className="text-textColor text-center text-base font-medium md:text-lg">
        Photos & Details
      </h4>
      <form className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
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
            options={[{ option: 'Condo', value: 'condo' }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Input type="date" label="Project Name" shadow />
        </div>

        <div className="grid grid-cols-12 gap-4 lg:col-span-12">
          <div
            className="col-span-6 flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-blue-500"
            onDragOver={e => e.preventDefault()}
            onDrop={handleDrop}
            onClick={handleClick}
          >
            <AiOutlineCloudUpload className="text-primary h-10 w-10" />
            <p className="mt-2 text-xs text-[#32343C]">
              Click here to upload your ownership documents
            </p>
            <p className="mt-2 text-sm text-[#32343C]">
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
              className="bg-primary mt-3 cursor-pointer rounded-lg px-4 py-2 text-white hover:bg-blue-600"
            >
              Browse
            </button>
          </div>

          <div className="col-span-6 flex items-center justify-center">
            {image ? (
              <div className="relative h-[180px] w-full rounded-lg border-2 border-dashed border-gray-300 p-4">
                <Image
                  src={image}
                  alt="Uploaded"
                  layout="fill" // Makes the image fill the parent container
                  objectFit="cover" // Ensures the image covers the container without distortion
                  className="rounded-lg" // Optional: adds rounded corners
                />
              </div>
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4">
                <AiOutlineCloudUpload className="text-primary h-10 w-10" />
                <p className="mt-2 text-xs text-[#32343C]">No image uploaded yet</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-[14px] lg:col-span-12">
          <button
            className="cursor-pointer rounded-sm bg-[#7C848DB2] px-5 py-[10px] text-sm font-medium text-white md:text-base"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-primary cursor-pointer rounded-sm px-5 py-[10px] text-sm font-medium text-white md:text-base"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default PhotosAndDetails;
