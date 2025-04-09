import Image from 'next/image'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { MessageUser } from '@/assets/icon';
import UserReviewsCard from '../properties/UserReviewsCard';
import { FaStar, FaRegStar } from 'react-icons/fa';

function BasicDetails() {
    return (
        <div className="w-full flex flex-col gap-4">
            {/* Top details */}
            <div className="p-3.5 bg-white rounded-lg w-full h-full">
                {/* Header Image with Profile Overlay */}
                <div className="relative w-full">
                    {/* Frame image with responsive layout */}
                    <Image
                        src='/images/agent/Frame.png'
                        alt="Frame image"
                        layout="responsive"
                        width={1190}
                        height={225}
                        className="object-cover rounded-md"
                    />
                    {/* Profile image positioned relative to the frame image */}
                    <div className="absolute -bottom-8 left-4 sm:-bottom-12 sm:left-6 md:-bottom-16 lg:-bottom-20 2xl:-bottom-28">
                        <Image
                            src='/images/agent/UserProfile.png'
                            alt="User Profile"
                            layout="intrinsic"
                            width={226}
                            height={226}
                            className="rounded-full w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-56 lg:h-56"
                        />
                    </div>
                </div>

                {/* Agent Information */}
                <div className="w-full mt-20">
                    <div className=" sm:ml-[260px] md:ml-[200px] lg:ml-[250px] flex flex-col">
                        <div className="flex flex-col sm:flex-row w-full justify-between">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl font-semibold">John Doe</h1>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-base font-medium">
                                        Certified Inspection Officer
                                    </h1>
                                    <BsPatchCheckFill className="text-primary" />
                                </div>
                                <div className="flex items-center text-xl text-primary">
                                    <IoHomeOutline />
                                    <h1>123 Sukhumvit Rd, Bangkok, Thailand</h1>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
                                <div className="size-9 flex items-center justify-center bg-[#E9F2FF]">
                                    <BsChatSquareDotsFill className="text-[#0245A5]" />
                                </div>
                                <div className="size-9 flex items-center justify-center bg-[#E9F2FF]">
                                    <FaBookmark className="text-[#0245A5]" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-end">
                                <p className="text-primary">9 Am - 6 Pm</p>
                            </div>
                            <div className="flex flex-col sm:flex-row mt-3 items-center justify-between">
                                <button className="py-3 px-5 bg-primary rounded-md text-white">
                                    <div className="flex items-end gap-2">
                                        <p>Message</p>
                                        <MessageUser />
                                    </div>
                                </button>
                                <div className="flex gap-2 mt-3 sm:mt-0">
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                    <div className="size-8 bg-primary flex items-center rounded-md justify-center">
                                        <p className="text-white">M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Left Side */}
                <div className="lg:col-span-8 p-6 bg-white rounded-lg">
                    <div className="flex flex-col lg:flex-row">
                        <div>
                            <h1 className="text-xl font-medium">Certification</h1>
                            <div className="w-full sm:w-[249px] mt-5 h-[219px] bg-gray-400">
                                {/* Certification details/image goes here */}
                            </div>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:ml-[53px]">
                            <div>
                                <h1 className="text-xl font-medium">Experience & Services</h1>
                                <div className="mt-5">
                                    <h1 className="text-xl font-medium">Experience</h1>
                                    <p className="text-base">
                                        It is a long established fact that a reader will be distracted by
                                        the readable content of a page when looking at its layout.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h1 className="text-xl font-medium">Service Charges</h1>
                                <ul className="list-disc pl-5 text-base font-medium">
                                    <li>Property Showing (Base price): ฿$200</li>
                                    <li>Inspection Fee (Base price): ฿$900</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="lg:col-span-4 p-6 bg-white rounded-lg">
                    <div className="flex flex-col justify-between h-full">
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">Reviews</p>
                            <div className="flex items-center gap-3">
                                <p className="text-lg font-semibold">4.0</p>
                                <div className="flex text-[#ECBA0B]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <UserReviewsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDetails;
