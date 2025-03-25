'use client'
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { TbStarFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { Chat } from "@/assets/icon";
import { GoBookmarkFill } from "react-icons/go";
import { IoHomeOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";

const AgentCard = ({ data }) => {

    const router = useRouter();
    return (
        <div
            className="relative cursor-pointer min-w-[270px] min-h-[255px] w-full h-full rounded-md"
        >
            <Image
                src={data?.image}
                width={270}
                height={225}
                className="absolute inset-0 w-full h-full object-cover rounded-md"
                alt="property image"
            />
            <div className="absolute inset-0 w-full h-full rounded-md bg-black/20"></div>
            <div className="bg-white flex  items-center justify-between gap-1 m-2 rounded-md  absolute top-0 left-0 py-1 px-2  text-[10px] font-semibold text-[#3582E7]">
                <div>

                    <TbStarFilled className="text-[#FAD400] text-md" />
                </div>
                <div>

                    <span className="text-xs text-[#969696]">

                        {data?.ratings}/5
                    </span>
                </div>
            </div>
            <div className="absolute top-2 right-2 cursor-pointer">
                <Chat className="text-white text-xl" />
            </div>
            <div className="absolute bottom-3 left-3 w-[calc(100%-24px)] bg-white rounded-md p-3">
                <div className="flex items-end justify-between gap-2">
                    <div>
                        <h6 className="text-xs text-[#FDAC3B] font-bold">
                            {data?.speciality}
                        </h6>
                        <h4 className="text-sm md:text-base font-semibold text-textColor leading-none">
                            {data?.name}
                        </h4>
                    </div>
                    <span
                        className={`bg-[#1D7FFF1A] flex items-center justify-center text-[#0245A5] text-xs font-semibold rounded-xs size-[18px]`}
                    >
                        <GoBookmarkFill />
                    </span>
                </div>
                <p className="my-1 flex items-center gap-1 text-[10px] text-[#0345A5]">
                    <IoHomeOutline className="text-[#0345A5]" />
                    {data?.address}
                </p>
                <div className="flex item center justify-between">
                    <div><p className="text-xs text-[#32343C]">Task:</p></div>
                    <div><p className="text-xs font-semibold">{data?.task}</p></div>
                </div>

                <div className="border-t border-[#d8d8d8dc]  flex items-center pt-[8px] justify-center">
                    <button
                        onClick={() => router.push(`/owner/agent/agent-profile/${data?._id}`)}
                        className="bg-primary rounded-sm cursor-pointer px-[4px] py-[3px]">
                        <div className="flex gap-1 items-center">
                            <p className="text-xs text-white">
                                View Details
                            </p>
                            <GoArrowUpRight className="text-md font-semibold text-white" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentCard;

