import IconButton from "@/components/shared/small/IconButton";
import InputDropdown from "@/components/shared/small/InputDropdown";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaUser } from "react-icons/fa"; // Example icon from react-icons
import { BsPlus } from "react-icons/bs";
import Input from "@/components/shared/small/Input";
import Dropdown from "@/components/shared/small/Dropdown";
import { IoClose } from "react-icons/io5";

const Pricing = ({ setCurrentStep }) => {
  const handlePrevious = () => setCurrentStep((prevStep) => prevStep - 1);
  const frequencyOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "quarterly", label: "Quarterly" },
    { value: "yearly", label: "Yearly" },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };
  return (
    <div>
      <h4 className="text-center text-textColor text-lg md:text-lg font-medium">
        Pricing
      </h4>
      <form className="mt-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="lg:col-span-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-10">

              <InputDropdown
                placeholder="0"
                label="1 Month Contract"
                options={frequencyOptions}
                defaultText="/month"
                onSelect={handleSelect}
                mainClassName="custom-dropdown"
                dropdownIcon={"THB - $"}
              // width="w-[79px]"
              />
            </div>
            <div className="col-span-2 ">
              <div className="flex h-full items-end justify-end">

                <IconButton
                  text="Add Deal"
                  leftIcon={<BsPlus />}
                  // rightIcon={<FaArrowRight />}
                  cn="!px-2"
                  width="w-full"
                // height="h-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-12">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-10">

              <InputDropdown
                placeholder="0"
                label="Customize"
                options={frequencyOptions}
                defaultText="/month"
                onSelect={handleSelect}
                mainClassName="custom-dropdown"
                // dropdownIcon={<FaUser size={20} color="#292D3280" />}
                dropdownIcon={'THB - $'}
              // width="w-[79px]"
              />
            </div>
            <div className="col-span-2 ">
              <div className="flex h-full items-end justify-end">

                <IconButton
                  // text="Add Deal"
                  leftIcon={<IoClose  className="text-3xl text-[#41414199]"/>}
                  // rightIcon={<FaArrowRight />}
                  cn="!px-2 bg-white shadow-lg"
                  width="w-full"
                // height="h-12"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-12">
          <label class="flex items-center  space-x-2 cursor-pointer">
            <input type="checkbox" id="myCheckbox" className="w-[18px] h-[18px] text-blue-600"/>
              <span class=" text-base font-medium">I want to set custom price</span>
          </label>
        </div>
        <div className="lg:col-span-12">
          <Dropdown
            label="Security Deposit per Contract"
            options={[{ option: "Condo", value: "condo" }]}
            shadow
          />
        </div>
        <div className="lg:col-span-12">
          <Input label="Custom Price" shadow />
        </div>
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
