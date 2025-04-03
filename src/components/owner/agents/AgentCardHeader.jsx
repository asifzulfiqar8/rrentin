"use client";

import SearchInput from "@/components/shared/small/SearchInput";
import Selector from "@/components/shared/small/Selector";
import Image from "next/image";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";

const AgentCardHeader = ({ tabView, setTabView }) => {
    const [selectedStatus, setSelectedStatus] = useState("Favorite");
    const [selectedType, setSelectedType] = useState("Type");

    return (
        <section className="flex items-center justify-between gap-5 border-b border-[#395d8c4d] pb-4">
            <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
                <Image
                    src="/images/dashboard/rental.png"
                    width={32}
                    height={32}
                    alt="icon"
                />
                My On Demand Agents
            </div>
            <div className="flex items-center gap-6">
                <div className="w-full lg:w-[440px]">

                    <SearchInput placeholder="properties"  />
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

        </section>
    );
};

export default AgentCardHeader;
