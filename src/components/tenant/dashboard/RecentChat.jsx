/* eslint-disable react/prop-types */
'use client'
import { useState } from "react";
import { LuChevronRight } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import { Activities } from "@/assets/icon";

const RecentChat = () => {
    const image = '/images/tenant/dashboard/Bitmap.png'
    return (
        <div className="  p-3 ">
            <h3 className="text-sm md:text-base font-[600]">Recent Chat</h3>
            <div className="h-[300px] custom-scroll overflow-auto mt-1">
                <SingleUser type="Asif" icon={image} />
                <SingleUser type="Yasir" icon={image} />
                <SingleUser type="Usman" icon={image} />

                <SingleUser type="Sensor Malfunction" icon={image} />
                <SingleUser type="Asif" icon={image} />
                <SingleUser type="Yasir" icon={image} />
                <SingleUser type="Usman" icon={image} />

                <SingleUser type="Sensor Malfunction" icon={image} />
            </div>
        </div>
    );
};

export default RecentChat;

const SingleUser = ({ icon, type }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div
            className="p-2 flex items-start gap-4 hover:bg-gray-100 justify-between cursor-pointer border-b-[1px]"
            onClick={handleOpen}
        >
            <img src={icon} className="w-8 rounded-full" />

            <div className="flex flex-col items-start grow gap-1 ">
                <h3 className=" text-sm ">{type}</h3>
                <h5 className="text-[8px]">30 min ago</h5>

                {isOpen && (
                    <div className="flex gap-1 items-center">
                        <RiErrorWarningFill className="text-[#EE4444]" />
                        <p className="text-[10px]">
                            Driver’s real-time location is not updating correctly in the
                            system
                        </p>
                    </div>
                )}
            </div>
            <h5 className="text-[8px]">30 min ago</h5>
            <div
                className={`transition-all duration-300  ${isOpen ? "-rotate-90" : "rotate-0"
                    } `}
            >
                <LuChevronRight fontSize={20} />
            </div>
        </div>
    );
};

// export default RecentChat
// export default RecentChat