const PropertyInfo = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep((prevStep) => prevStep + 1);
  const handlePrevious = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <div>
      <h4 className="text-center text-textColor text-base md:text-lg font-medium">
        Property Information
      </h4>
      <div className="flex justify-end gap-[14px]">
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
    </div>
  );
};

export default PropertyInfo;
