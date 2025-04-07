"use client";

import { SelectorDownIcon } from "@/assets/icon";
import { useEffect, useRef, useState } from "react";

const Selector = ({ lists, selectedOption, setSelectedOption,cn }) => {
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const selectorRef = useRef(null);
  const selectHandler = (option) => {
    setSelectedOption(option);
    setIsOptionOpen(false);
  };
  const optionsHandler = () => setIsOptionOpen(!isOptionOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target)) {
        setIsOptionOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className={`${cn} relative w-[110px] z-50`} ref={selectorRef}>
      <div
        className="flex items-center justify-center text-sm bg-white rounded-sm h-[40px] gap-2 cursor-pointer p-2 text-[#969696] text-nowrap border border-[#DCDCDC4D]"
        style={{ boxShadow: "0px 2px 12px 0px #3582E70F" }}
        onClick={() => optionsHandler()}
      >
        {selectedOption}
        <div
          className={`transition-all duration-300 ${
            isOptionOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <SelectorDownIcon />
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

export default Selector;
