"use client";
import { BuildingIcon, EyeIcon } from "@/assets/icon";
import Modal from "@/components/shared/small/Modal";
import Link from "next/link";
import { useState } from "react";
// import PropertiesView from "./PropertiesView";
import Image from "next/image";
import { LuCircleUser } from "react-icons/lu";

const NewAgentHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalOpenHandler = () => setIsModalOpen(true);
  const modalCloseHandler = () => setIsModalOpen(false);

  return (
    <>
      {isModalOpen && (
        <Modal
          onClose={modalCloseHandler}
          title={<div className="flex items-center gap-4">
            <Image
              src="/images/dashboard/rental.png"
              width={32}
              height={32}
              alt="icon"
            />
            <span className="text-sm font-semibold">Properties Inspection Service</span>
          </div>}
          width="w-[320px] md:w-[1150px]"
        >
          {/* <PropertiesView /> */}
        </Modal>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        On Demand Showing Agent
        </h3>
        <div className="flex items-center gap-4 md:gap-5">
          {/* ✅ Fixed: Correct onClick handler */}
          
          <Link href="/owner/add-property">
            <Button text="My Agent" icon={<LuCircleUser className="text-white text-base" />} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewAgentHeader;

// ✅ Fixed: Spread `...rest` so it receives `onClick`
const Button = ({ className, text, icon, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${className} flex items-center gap-2 bg-primary p-2 rounded-[4px] text-white font-medium text-sm cursor-pointer`}
    >
      {icon}
      {text}
    </button>
  );
};

