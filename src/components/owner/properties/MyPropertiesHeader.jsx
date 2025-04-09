"use client";

import SearchInput from "@/components/shared/small/SearchInput";
import Selector from "@/components/shared/small/Selector";
import Image from "next/image";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";

const MyPropertiesHeader = ({ tabView, setTabView }) => {
  const [selectedStatus, setSelectedStatus] = useState("Status");
  const [selectedType, setSelectedType] = useState("Type");

  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-5 border-b border-[#395d8c4d] pb-4">
      <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
        <Image
          src="/images/dashboard/rental.png"
          width={32}
          height={32}
          alt="icon"
        />
        My Properties
      </div>
      <div className="flex items-center gap-2 md:gap-6">
        <div className=" lg:w-[440px]">
          <SearchInput placeholder="properties" cn='' />
        </div>
        <Selector
          lists={["All", "Active", "Inactive"]}
          selectedOption={selectedStatus}
          setSelectedOption={setSelectedStatus}
        />
        <Selector
          lists={["Rented", "Free"]}
          selectedOption={selectedType}
          setSelectedOption={setSelectedType}
        />
      </div>
      <div className="flex items-center gap-6">
        {["Map View", "Grid View"].map((view, i) => (
          <button
            key={i}
            className={`flex items-center gap-[6px] h-[30px]  rounded-sm px-2 text-sm text-white font-medium cursor-pointer ${view === tabView ? "bg-primary" : "bg-[#7C848DB2]"
              }`}
            onClick={() => setTabView(view)}
          >
            {view === "Map View" ? (
              <FaMapLocationDot className="text-base text-white" />
            ) : (
              <IoListSharp className="text-base text-white" />
            )}
            {view}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MyPropertiesHeader;
