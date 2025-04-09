"use client";

import SearchInput from "@/components/shared/small/SearchInput";
import Selector from "@/components/shared/small/Selector";
import Image from "next/image";
import { useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoListSharp } from "react-icons/io5";

const InspectionCardHeader = ({ tabView, setTabView }) => {
    const [selectedLocation, setLocation] = useState("Location");
    const [selectedPrice, setSelectedPrice] = useState("Price range");
    const [Favorite, setFavorite] = useState("Favorite");

    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-5 border-b border-[#395d8c4d] pb-4">
            <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
                <Image
                    src="/images/dashboard/rental.png"
                    width={32}
                    height={32}
                    alt="icon"
                />
                Available Agents
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-[200px]  lg:w-[440px]">
                    <SearchInput placeholder="properties" cn="!w-[200px] md:!w-[200px] lg:!w-[440px]" />
                </div>
                <Selector
                    lists={["All", "Active", "Inactive"]}
                    selectedOption={selectedLocation}
                    setSelectedOption={setLocation}
                />
                <Selector
                    lists={["Rented", "Free"]}
                    selectedOption={selectedPrice}
                    setSelectedOption={setSelectedPrice}
                />
                <Selector
                    lists={["Rented", "Free"]}
                    selectedOption={Favorite}
                    setSelectedOption={setFavorite}
                />
            </div>

        </section>
    );
};

export default InspectionCardHeader;

