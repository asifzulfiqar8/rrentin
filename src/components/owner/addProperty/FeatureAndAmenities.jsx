import Dropdown from '@/components/shared/small/Dropdown';

const FeatureAndAmenities = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep(prevStep => prevStep + 1);
  const handlePrevious = () => setCurrentStep(prevStep => prevStep - 1);

  return (
    <div>
      <h4 className="text-textColor text-center text-base font-medium md:text-lg">
        Features & Amenities
      </h4>
      <form className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Dropdown
            label="Property Feature"
            options={[{ option: 'Condo', value: 'condo' }]}
            shadow
          />
        </div>

        <div className="lg:col-span-6">
          <Dropdown label="Amenities" options={[{ option: 'Condo', value: 'condo' }]} shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown label="Rental Feature" options={[{ option: 'Condo', value: 'condo' }]} shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="View from the property"
            options={[{ option: 'Condo', value: 'condo' }]}
            shadow
          />
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

export default FeatureAndAmenities;
