'use client'
import { Rooms } from '@/assets/icon';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdLocationPin } from "react-icons/md";


function PropertyDetailsSlider({ data, onClose }) {


  const [selectedTab, setSelectedTab] = useState('overview');

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="p-5 h-full overflow-y-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Property Details</h2>
        <button onClick={onClose} className="text-xl">
          <FaTimes />
        </button>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {/* Main large image */}
        <div className="col-span-4">
          <Image
            src={data?.images[0]}
            width={310}
            height={216}
            alt="icon"
            className="rounded-md h-full w-full object-cover"
          />
        </div>

        {/* Smaller images */}
        <div className="col-span-2">
          <div className='flex flex-col gap-2'>

            <div>
              <Image
                src={data?.images[1]}
                width={101}
                height={101}
                alt="icon"
                className="rounded-md h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 relative">
              <Image
                src={data?.images[2]}
                width={101}
                height={101}
                alt="icon"
                className="rounded-md h-full w-full object-cover"
              />

              {data?.images.length > 3 && (
                <div className="absolute inset-0 flex justify-center items-center bg-white/50  text-white text-xs font-bold rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                  {data?.images.length - 3} {data?.images.length - 3 > 1} +
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
      <div className='flex flex-col mt-4'>
        <div className='flex items-center justify-between'>
          <p className='text-[22px] font-semibold'>
            Dream House
          </p>
          <p className='text-[22px] font-semibold'>
            {data?.rentPrice}
            <span className='text-sm font-semibold text-[#C2C2C2]'>
              /month
            </span>
          </p>
        </div>
        <div className='flex items-center'>
          <MdLocationPin className='text-primary' />
          <p className='text-sm text-[#545454]'>{data?.address}</p>
        </div>
      </div>

      <div className="p-5 h-full overflow-y-auto">
        <div className="flex mb-4 w-full ">
          <div
            onClick={() => handleTabClick('overview')}
            className={`cursor-pointer w-full py-2 px-4  text-center text-[#848A9C] text-base font-semibold ${selectedTab === 'overview' ? 'border-b-2 text-black' : 'bg-white'
              }`}
          >
            Overview
          </div>

          <div
            onClick={() => handleTabClick('reviews')}
            className={`cursor-pointer w-full py-2 px-4 text-center text-[#848A9C]  text-base font-semibold ${selectedTab === 'reviews' ? 'border-b-2 text-black' : 'bg-white'
              }`}
          >
            Reviews
          </div>
        </div>

        {/* Content Based on Selected Tab */}
        <div>
          {selectedTab === 'overview' && (
            <div className=" ">
              <div>
                <p className='text-base font-semibold'>Description</p>
                <p className='h-12 overflow-auto custom-scroll  text-sm tracking-tight leading-tight '>{data?.description}</p>
              </div>
              <div>
                <div>
                  <div>
                    <Rooms />
                    {data?.rooms}
                    Rooms
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          )}

          {selectedTab === 'reviews' && (
            <div className="p-4">
              {/* Your Reviews Content */}
              <h3 className="text-xl font-semibold">Reviews</h3>
              <p>{data?.reviews}</p>
            </div>
          )}
        </div>
      </div>


    </div>
  );
}

export default PropertyDetailsSlider;
