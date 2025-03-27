const Pricing = ({ setCurrentStep }) => {
  const handlePrevious = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <div>
      <h4 className="text-center text-textColor text-base md:text-lg font-medium">
        Pricing
      </h4>
      <form className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-12 flex justify-end gap-[14px]">
          <button
            className="cursor-pointer py-[10px] px-5 rounded-sm bg-[#7C848DB2] text-white text-sm md:text-base font-medium"
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button className="cursor-pointer py-[10px] px-5 rounded-sm bg-primary text-white text-sm md:text-base font-medium">
            Add Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default Pricing;
