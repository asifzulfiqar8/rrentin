import Image from 'next/image';
import React from 'react';
import { FaBookmark } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';

function LinkedOwnerCard({ data }) {
  return (
    <div className="p-2 relative border min-h-[283px] bg-white w-full h-full rounded-md">
      <div className="relative h-[93px] overflow-visible">
        <Image
          src={data.inspectionImage}
          width={270}
          height={93}
          alt="Property Background"
          className="mx-auto object-contain rounded-t-lg"
        />
        <div className="absolute w-[75px] h-[75px] z-10 -bottom-5 left-1/2 transform -translate-x-1/2">
          <Image
            src={data.userImage}
            width={75}
            height={75}
            alt="Profile Image"
            className="rounded-full w-[75px] h-[75px] border-4 border-white shadow-md"
          />
        </div>
      </div>
      <div className="flex flex-col mt-4 gap-1 w-full">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-base font-semibold">{data.name}</p>
          </div>
          <div className="w-3.5 h-w-3.5 cursor-pointer flex items-center justify-center rounded-[2px] bg-[#E9F2FF]">
            <FaBookmark className="text-primary" />
          </div>
        </div>
        <div className="text-primary flex items-center">
          <IoHomeOutline />
          <span className="text-xs font-medium">{data.address}</span>
        </div>
        <div>
          <p className="text-base font-medium">{data.price}</p>
        </div>
        <div className="flex items-center">
          <h1 className="text-xs font-medium">{data.role}</h1>
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-11">
            <Image
              src={data.inspectionImage}
              width={78}
              height={43}
              alt="Property Background"
              className="mx-auto object-contain rounded-lg"
            />
          </div>
          <div className="w-20 h-11">
            <Image
              src={data.inspectionImage}
              width={78}
              height={43}
              alt="Property Background"
              className="mx-auto object-contain rounded-lg"
            />
          </div>
          <div className="w-20 h-11">
            <Image
              src={data.inspectionImage}
              width={78}
              height={43}
              alt="Property Background"
              className="mx-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkedOwnerCard;
