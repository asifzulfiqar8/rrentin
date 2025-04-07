'use client'

import React, { useState } from 'react';
import HeaderGreeting from './HeaderGreeting';
import ViewSwitcher from './ViewSwitcher';
import FiltersSection from './FiltersSection';
import Image from 'next/image';
import IconDropdown from '@/components/shared/small/IconDropdown';
import { Bath, ListIcon } from '@/assets/icon';
import { LuArrowUpDown } from "react-icons/lu";
import { FaBookmark } from "react-icons/fa";

function BrowserHeader() {
    const [tabView, setTabView] = useState("List");
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedPrice, setSelectedPrice] = useState("Price");
    const [selectedLocation, setSelectedLocation] = useState("Location");
    const [selectedOption, setSelectedOption] = useState("sort");

    return (
        <div className='flex flex-col gap-4'>
            <div className='bg-white rounded-md shadow-md px-6 py-3.5'>
                {/* Top Header */}
                <div className='flex items-center justify-between flex-wrap gap-4'>
                    <HeaderGreeting />
                    <ViewSwitcher tabView={tabView} setTabView={setTabView} />
                </div>

                {/* Filter Section */}
                <FiltersSection
                    selectedType={selectedType}
                    setSelectedType={setSelectedType}
                    selectedPrice={selectedPrice}
                    setSelectedPrice={setSelectedPrice}
                    selectedLocation={selectedLocation}
                    setSelectedLocation={setSelectedLocation}
                />
            </div>
            <div className='bg-white rounded-md shadow-md px-6 py-4'>
                <section className="flex flex-col md:flex-row items-center justify-between gap-5 border-b border-[#395d8c4d] pb-4">

                    <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
                        <Image
                            src="/images/dashboard/rental.png"
                            width={40}
                            height={40}
                            alt="icon"
                        />
                        <div className='flex flex-col'>
                            <p className='text-[22px] font-semibold'>Properties</p>
                            <p className='text-sm font-medium text-[#666666]'>Showing 1-20 of 350 properties</p>
                        </div>
                    </div>
                    <div className='bg-red-200 flex justify-end items-end'>
                        <IconDropdown
                            lists={["Today", "Week", "Month"]}
                            icon={<LuArrowUpDown className="text-white" />}
                            containerClass="w-[90px]" // container width
                            buttonClass="bg-primary w-[90px] text-white" // button style
                            optionClass="bg-white text-black" // option list style
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />

                    </div>
                </section>



                {tabView === "List" ? (
                    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[800px] overflow-y-scroll scroll-0">
                    //     {myPropertiesData.map((card, i) => (
                    //         <PropertyCard data={card} key={i} />
                    //     ))}
                    // </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-5 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[800px] overflow-y-scroll scroll-0">
                        <div className="h-[440px] w-full bg-white rounded-md shadow-lg border">
                            <div className='relative w-full h-[239px] '>
                                <Image
                                    src="/images/browser-property/Properties.png"
                                    width={368}
                                    height={239}
                                    alt="icon"
                                    className="rounded-tr-md h-full rounded-tl-md w-full object-cover"
                                />
                                <div className="absolute top-2 right-2">

                                    <div className=" size-8 bg-[#E9F2FF] rounded-full flex items-center justify-center border text-primary px-2 py-1 text-sm shadow">
                                        <FaBookmark className='text-primary' />
                                    </div>
                                </div>

                                <div className="absolute top-2 left-2">
                                    <div className="bg-white rounded-md border text-primary px-1 py-[2px] text-sm shadow">
                                        <p className='text-xs font-bold'>House</p>
                                    </div>


                                </div>
                                <div className="absolute bottom-2 right-2">
                                    <div className="bg-[#32343C80] rounded-full  text-primary px-2.5 py-1 text-sm shadow">
                                        <p className="text-white">
                                            1/10
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div>
                                    <p className='text-sm text-[#969696]'>Address</p>
                                </div>
                                <div className='flex flex-col mt-4'>
                                    <div className='flex items-center justify-between'>
                                        <p className='text-[22px] font-semibold'>
                                            $388,900
                                        </p>
                                        <p className='text-[22px] font-semibold'>
                                            $388.00
                                            <span className='text-sm font-semibold text-[#C2C2C2]'>
                                                /month
                                            </span>
                                        </p>
                                    </div>
                                    <div>
                                        <p className='text-lg text-[#545454]'>Dream House</p>
                                    </div>
                                </div>
                                <div className='border-b-2 mt-4 mb-4'></div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Bath/>
                                        <p className='text-sm font-semibold text-[#32343CCC]/50'>4 Beds</p>
                                    </div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Bath/>
                                        <p className='text-sm font-semibold text-[#32343CCC]/50'>4 Beds</p>
                                    </div>
                                    <div className='flex items-center justify-center gap-2'>
                                        <Bath/>
                                        <p className='text-sm font-semibold text-[#32343CCC]/50'>4 Beds</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    // <ShowMap /><
                    <div>
                        map
                    </div>
                )}
            </div>
        </div>
    );
}

export default BrowserHeader;
