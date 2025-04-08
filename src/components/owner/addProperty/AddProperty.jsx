"use client";
import { ArrowIcon } from "@/assets/icon";
import BasicInfo from "@/components/owner/addProperty/BasicInfo";
import FeatureAndAmenities from "@/components/owner/addProperty/FeatureAndAmenities";
import PhotosAndDetails from "@/components/owner/addProperty/PhotosAndDetails";
import Pricing from "@/components/owner/addProperty/Pricing";
import PropertyInfo from "@/components/owner/addProperty/PropertyInfo";
import { useState } from "react";

const AddProperty = () => {
  const [currentStep, setCurrentStep] = useState(4);

  const steps = [
    "Basic Info",
    "Property Info",
    "Feature & Amenities",
    "Photos & Details",
    "Pricing",
  ];

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <BasicInfo setCurrentStep={setCurrentStep} />;
      case 1:
        return <PropertyInfo setCurrentStep={setCurrentStep} />;
      case 2:
        return <FeatureAndAmenities setCurrentStep={setCurrentStep} />;
      case 3:
        return <PhotosAndDetails setCurrentStep={setCurrentStep} />;
      case 4:
        return <Pricing setCurrentStep={setCurrentStep} />;
      default:
        return null;
    }
  };
  return (
    <div className="py-[30px] px-5 md:px-10 rounded-[10px] bg-white shadow-custom">
      <h2 className="text-xl md:text-[22px] font-semibold text-textColor text-center">
        Add Property
      </h2>
      <div className="mt-4 md:mt-5 flex flex-wrap items-center md:justify-between gap-4 md:gap-8 max-w-[900px] mx-auto">
        {steps.map((step, i) => (
          <Step
            step={step}
            index={i}
            key={i}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            stepsLength={steps.length}
          />
        ))}
      </div>
      <div className="mt-4 md:mt-6 2xl:mt-8">
        {renderStepContent(currentStep)}
      </div>
    </div>
  );
};

export default AddProperty;

const Step = ({ step, index, currentStep, setCurrentStep, stepsLength }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 relative z-50 ${
        currentStep >= index
          ? "opacity-100 cursor-pointer"
          : "opacity-95 grayscale pointer-events-none"
      }`}
      onClick={() => setCurrentStep(index)}
    >
      <span className="size-[50px] rounded-full bg-primary text-white text-xl md:text-2xl font-semibold grid place-items-center">
        {index + 1}
      </span>
      <p className="text-xs sm:text-sm text-primary font-medium">{step}</p>
      {index < stepsLength - 1 && (
        <span className="absolute top-[30%] left-[67%] z-0">
          <svg
            width="200"
            height="2"
            viewBox="0 0 200 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1L200 0.999989" stroke="#0245A5" strokeWidth="1.7" />
          </svg>
        </span>
      )}
    </div>
  );
};
