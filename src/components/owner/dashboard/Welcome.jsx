"use client";
import { BuildingIcon, EyeIcon, ListIcon } from "@/assets/icon";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Welcome = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        Welcome! <span className="font-normal">Alexander</span>
      </h3>
      <div className="flex items-center gap-4 md:gap-5">
        <Button text="Views & Interested Tenants" icon={<EyeIcon />} />
        <Link href="owner/add-property">
          <Button text="Add Property" icon={<BuildingIcon />} />
        </Link>
        <CustomDropDown lists={["Week", "Month", "Year"]} />
      </div>
    </div>
  );
};

export default Welcome;

const Button = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-2 bg-primary p-2 rounded-[4px] text-white font-medium text-sm cursor-pointer">
      {icon}
      {text}
    </button>
  );
};

const CustomDropDown = ({ lists }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Week");
  const selectHandler = (option) => {
    setSelectedOption(option);
    setIsOptionOpen(false);
  };
  const optionsHandler = () => setIsOptionOpen(!isOptionOpen);
  return (
    <div className="relative w-[110px] z-50">
      <div
        className="flex items-center justify-between text-sm bg-[#7C848D] text-white gap-2 cursor-pointer p-2 rounded-[4px] text-nowrap"
        onClick={() => optionsHandler()}
      >
        <ListIcon />
        {selectedOption}
        <div
          className={`transition-all duration-300 ${
            isOptionOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <IoIosArrowDown fontSize={18} />
        </div>
      </div>
      {isOptionOpen && (
        <ul className="flex flex-col bg-white rounded-lg shadow-md absolute top-[40px] left-0 w-full">
          {lists.map((list, i) => (
            <li
              key={i}
              className="py-1 px-2 border-b text-sm cursor-pointer text-[#00000099] hover:bg-gray-100"
              onClick={() => selectHandler(list)}
            >
              {list}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
