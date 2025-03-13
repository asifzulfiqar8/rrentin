"use client";
import { NotificationBoxIcon, ReloadIcon } from "@/assets/icon";
import { getDate } from "@/utils/getDate";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NotificationMenu from "../shared/NotificationMenu";

const Header = () => {
  const [date, setDate] = useState("");
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationRef = useRef(null);

  useEffect(() => {
    setDate(getDate());

    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target)
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className="bg-white rounded-lg h-[74px] p-4 flex items-center justify-between gap-4">
      <div>
        <h2 className="text-xl lg:text-[22px] font-semibold text-text-textColor">
          Dashboard
        </h2>
        <p className="text-xs text-[#969696]">{date}</p>
      </div>
      <div className="flex items-center gap-[14px]">
        <SwitchButton />
        <div className="relative" ref={notificationRef}>
          <button
            className="p-2 rounded-[5px] cursor-pointer"
            style={{ boxShadow: "0px 1px 6px 0px #00000014" }}
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
          >
            <NotificationBoxIcon />
          </button>
          <NotificationMenu isNotificationOpen={isNotificationOpen} />
        </div>
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;

const SwitchButton = () => (
  <button
    className="hidden md:flex items-center gap-3 py-2 px-5 rounded-[5px] text-sm md:text-base font-medium text-text-textColor cursor-pointer"
    style={{ boxShadow: "0px 1px 6px 0px #00000014" }}
  >
    <ReloadIcon />
    Switch to Tenant
  </button>
);

const LanguageSwitch = () => {
  return (
    <button
      className="py-2 px-5 rounded-[5px] hidden md:flex items-center gap-1 text-xs text-[#969696]"
      style={{ boxShadow: "0px 1px 6px 0px #00000014" }}
    >
      <Image
        src="/images/default/english-flag.png"
        width={20}
        height={13}
        alt="flag image"
      />
      English
      <IoIosArrowDown className="text-base text-[#969696]" />
    </button>
  );
};
