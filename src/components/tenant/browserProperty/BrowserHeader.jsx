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
import BrowsePropertyCard from './BrowsePropertyCard';
import { houses } from '@/data/data';
import PropertyDetailsSlider from './PropertyDetailsSlider';

function BrowserHeader() {
    const [tabView, setTabView] = useState("List");
    const [selectedType, setSelectedType] = useState("All Types");
    const [selectedPrice, setSelectedPrice] = useState("Price");
    const [selectedLocation, setSelectedLocation] = useState("Location");
    const [selectedOption, setSelectedOption] = useState("sort");

    const [selectedProperty, setSelectedProperty] = useState(null);

    const handleCardClick = (property) => {
        setSelectedProperty(property);
    };

    const handleCloseSlider = () => {
        setSelectedProperty(null);
    };


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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 max-h-[800px] overflow-y-scroll">
                        {/* Left side: Property Cards Grid */}
                        {/* <div className="relative"> */}
                            {houses.map((property) => (
                                <div key={property.id} onClick={() => handleCardClick(property)}>
                                    <BrowsePropertyCard data={property} />
                                </div>
                            ))}
                        {/* </div> */}

                        {/* Right side: Sliding Details Panel */}
                        <div
                            className={`fixed top-24 right-0 w-full lg:w-1/3 xl:w-1/4 h-full bg-white shadow-lg transition-transform duration-300 ${selectedProperty ? 'translate-x-0' : 'translate-x-full'
                                } z-50`}
                        >
                            {selectedProperty && (
                                <PropertyDetailsSlider data={selectedProperty} onClose={handleCloseSlider} />
                            )}
                        </div>
                    </div>


                ) : (
                    <div>
                        map
                    </div>
                )}
            </div>
        </div>
    );
}

export default BrowserHeader;
