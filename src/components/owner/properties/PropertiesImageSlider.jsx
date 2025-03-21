"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import Button from "@/components/shared/small/Button";
import { FaEdit } from "react-icons/fa";
import BedIcon from '../../../assets/propertyDetails/BedIcon'
import BathIcon from '../../../assets/propertyDetails/BathIcon'
import SqmIcon from '../../../assets/propertyDetails/SqmIcon'
import FloorsIcon from '../../../assets/propertyDetails/FloorsIcon'
const mainImages = [
  "/images/dashboard/property-card-1.png",
  "/images/dashboard/property-two.jpeg",
  "/images/dashboard/property-three.jpeg",
  "/images/dashboard/property-four.jpeg",
];

const sideImages = [
  "/images/dashboard/side-image.png",
  "/images/dashboard/side-image-2.png",
  "/images/dashboard/side-image-3.png",
  "/images/dashboard/property-card-1.png",
  "/images/dashboard/side-image-2.png",
  "/images/dashboard/side-image-3.png",
  "/images/dashboard/property-card-1.png",
];
const PropertiesImageSlider = () => {
  return (
    <section className="bg-white rounded-lg p-4 grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left Slider Section */}
      <div className="lg:col-span-8 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={10}
          loop
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
        >
          {mainImages.map((img, i) => (
            <SwiperSlide key={i}>
              <Image
                src={img}
                width={700}
                height={380}
                alt={`${i} main image`}
                className="w-full h-[380px] object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex items-center justify-between w-full top-[50%] translate-y-[-50%] z-50 px-6">
          <div className="custom-next bg-white size-[27px] rounded-full grid place-items-center">
            <IoIosArrowBack className="text-primary text-base cursor-pointer -ml-[2px]" />
          </div>
          <div className="custom-prev bg-white size-[27px] rounded-full grid place-items-center">
            <IoIosArrowBack className="text-primary text-base rotate-180 cursor-pointer -mr-[2px]" />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="lg:col-span-4 grid grid-cols-2 grid-rows-2 gap-4">
        {sideImages.slice(0, 3).map((img, i) => (
          <div className="relative" key={i}>
            <Image
              src={img}
              alt={`${i} side image`}
              width={221}
              height={185}
              className="w-full h-[180px] object-cover rounded-lg"
            />
          </div>
        ))}
        {sideImages.length > 3 && (
          <div className="relative">
            <Image
              src={sideImages[3]}
              alt={`side image 4`}
              width={221}
              height={185}
              className="w-full h-[180px] object-cover rounded-lg"
            />
            {sideImages.length > 4 && (
              <p className="absolute inset-0 bg-black/40 grid place-items-center text-white text-2xl md:text-[41px] font-medium rounded-lg">
                +{sideImages.length - 4}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="  grid grid-cols-2 lg:col-span-12  gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <span className="text-xl font-semibold text-black">The Crest Sukhumvit 34, Bangkok</span>
            <span className="text-sm font-bold text-[#34C759] bg-[#34C75926] px-2 py-1.5 rounded-lg">Available</span>
          </div>
          <span className="text-lg text-[#32343C] block">
            778 Sukhumvit Road, Khong Tan, Khlong Toei, Bangkok
          </span>
          <div className="text-[43px] font-bold">
            $243<span className="text-base text-[#32343C]"> / month</span>
          </div>
          <button className="flex items-center gap-2 w-[87px] h-10 bg-primary text-white text-base lg:text-xl font-medium rounded-xl cursor-pointer justify-center">
            <FaEdit className="text-white text-base lg:text-xl" />
            Edit
          </button>
        </div>
        {/* Property Features */}
        <div className="flex items-center justify-end gap-8">
          {[{ icon: <BedIcon />, label: "Bed", count: 2 },
          { icon: <BathIcon />, label: "Bath", count: 2 },
          { icon: <SqmIcon />, label: "Sqm", count: 2 },
          { icon: <FloorsIcon />, label: "Floors", count: 2 }].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-[#0245A5]">
              {item.icon}
              <span className="text-lg font-medium">{item.count}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesImageSlider;
