"use client";
import { BuildingIcon, EyeIcon } from "@/assets/icon";
import Link from "next/link";

const PropertyHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        Properties Details
      </h3>
      <div className="flex items-center gap-4 md:gap-5">
        <Button text="Views & Interested Tenants" icon={<EyeIcon />} />
        <Link href="/owner/add-property">
          <Button text="Add Property" icon={<BuildingIcon />} />
        </Link>
      </div>
    </div>
  );
};

export default PropertyHeader;

const Button = ({ text, icon }) => {
  return (
    <button className="flex items-center gap-2 bg-primary p-2 rounded-[4px] text-white font-medium text-sm cursor-pointer">
      {icon}
      {text}
    </button>
  );
};
