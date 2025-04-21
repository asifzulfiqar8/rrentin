'use client';
import { ArrowIcon } from '@/assets/icon';
import BasicInfo from '@/components/owner/addProperty/BasicInfo';
import FeatureAndAmenities from '@/components/owner/addProperty/FeatureAndAmenities';
import PhotosAndDetails from '@/components/owner/addProperty/PhotosAndDetails';
import Pricing from '@/components/owner/addProperty/Pricing';
import PropertyInfo from '@/components/owner/addProperty/PropertyInfo';
import { useState } from 'react';

const AddProperty = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    'Basic Info',
    'Property Info',
    'Feature & Amenities',
    'Photos & Details',
    'Pricing',
  ];

  const renderStepContent = step => {
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
    <div className="shadow-custom rounded-[10px] bg-white px-5 py-[30px] md:px-10">
      <h2 className="text-textColor text-center text-xl font-semibold md:text-[22px]">
        Add Property
      </h2>
      <div className="mx-auto mt-4 flex max-w-[900px] flex-wrap items-center justify-between gap-4 md:mt-5 md:gap-8">
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
      <div className="mt-4 md:mt-6 2xl:mt-8">{renderStepContent(currentStep)}</div>
    </div>
  );
};

export default AddProperty;

const Step = ({ step, index, currentStep, setCurrentStep, stepsLength }) => {
  return (
    <div
      className={`relative z-10 flex flex-col items-center gap-2 ${
        currentStep >= index
          ? 'cursor-pointer opacity-100'
          : 'pointer-events-none opacity-95 grayscale'
      }`}
      onClick={() => setCurrentStep(index)}
    >
      <span className="bg-primary grid size-[30px] place-items-center rounded-full text-base font-semibold text-white md:size-[50px] md:text-2xl">
        {index + 1}
      </span>
      <p className="text-primary text-[8px] font-medium md:text-sm">{step}</p>
      <div className="hidden lg:block">
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
    </div>
  );
};
