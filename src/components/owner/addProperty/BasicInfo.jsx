import Dropdown from '@/components/shared/small/Dropdown';
import Input from '@/components/shared/small/Input';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const MapWithLocation = dynamic(() => import('./MapWithLocation'), {
  ssr: false,
});

const BasicInfo = ({ setCurrentStep }) => {
  const handleNext = () => setCurrentStep(prevStep => prevStep + 1);
  const [streetAddress, setStreetAddress] = useState('thailand');

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(streetAddress)}&output=embed`;
  return (
    <div>
      <h4 className="text-textColor text-center text-base font-medium md:text-lg">
        Property Information
      </h4>
      <form className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <Dropdown
            label="Type of property"
            options={[{ option: 'Condo', value: 'condo' }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Input label="Project Name" shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown label="Region" options={[{ option: 'Condo', value: 'condo' }]} shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Buildings can be shown in (Days)"
            options={[{ option: 'Withing 7 days', value: '7-days' }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Buildings can be shown in (Hours)"
            options={[{ option: 'Withing 12 hours', value: '12-hours' }]}
            shadow
          />
        </div>
        <div className="lg:col-span-6">
          <Dropdown label="Location" options={[{ option: 'Thailand', value: 'thailand' }]} shadow />
        </div>
        <div className="lg:col-span-6">
          <Dropdown
            label="Sub district"
            options={[{ option: 'Thailand', value: 'thailand' }]}
            shadow
          />
        </div>
        <div className="lg:col-span-12">
          <Input
            label="Street Address (Optional)"
            name="streetAddress"
            value={streetAddress}
            onChange={e => setStreetAddress(e.target.value)}
          />
        </div>
        {/* MAP (iframe) */}
        <div className="h-[300px] md:h-[400px] lg:col-span-12">
          <MapWithLocation location={streetAddress} />
        </div>
        <div className="flex justify-end gap-[14px] lg:col-span-12">
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

export default BasicInfo;
