'use client'
import Image from "next/image";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";
import { TbStarFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";

const PropertyCard = ({ data }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/owner/properties/details/${data?._id}`)}

      // href={`/owner/properties/details/${data?._id}`}
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
      <div className="bg-white absolute top-0 left-0 py-1 px-2 rounded-br-xs text-[10px] font-semibold text-[#3582E7]">
        {data?.house}
      </div>
      <div className="absolute top-2 right-2 cursor-pointer">
        <FaRegEdit className="text-white text-xl" />
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
            className={`bg-[#1D7FFF1A] text-[#0245A5] text-xs font-semibold rounded-xs py-[3px] px-[6px]`}
          >
            Rent
          </span>
        </div>
        <p className="my-1 flex items-center gap-1 text-[10px] text-[#969696]">
          <PiMapPinFill className="text-[#0345A5]" />
          {data?.address}
        </p>
        <div className="border-t border-[#d8d8d8dc] pt-1 flex items-center justify-between">
          <p className="text-sm md:text-base text-textColor font-semibold">
            ${data?.price}.00
            <span className="text-[10px] text-[#C2C2C2]">/month</span>
          </p>
          <div className="flex items-center gap-1">
            <TbStarFilled className="text-[#FAD400] text-sm" />
            <p className="text-[10px] text-[#969696]">{data?.ratings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
