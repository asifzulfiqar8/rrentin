"use client";
import { BuildingIcon, EyeIcon } from "@/assets/icon";
import Modal from "@/components/shared/small/Modal";
import Link from "next/link";
import { useState } from "react";
// import PropertiesView from "./PropertiesView";
import Image from "next/image";

const TenantsHeader = () => {
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
            <span className="text-sm font-semibold">Properties Views</span>
          </div>}
          width="w-[320px] md:w-[1150px]"
        >
          {/* <PropertiesView /> */}
        </Modal>
      )}

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
          Tenants Details
        </h3>
        <div className="flex items-center gap-4 md:gap-5">
          {/* ✅ Fixed: Correct onClick handler */}
          <Button

            onClick={modalOpenHandler} text="View & Interested Tenants" icon={<EyeIcon />} />
          <Link href="/owner/add-property">
            <Button text="Add Property" icon={<BuildingIcon />} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TenantsHeader;

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

// export default TenantsHeader