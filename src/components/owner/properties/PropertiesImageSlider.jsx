"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";

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
          pagination
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
            <IoIosArrowBack className="text-primary text-base cursor-pointer" />
          </div>
          <div className="custom-prev bg-white size-[27px] rounded-full grid place-items-center">
            <IoIosArrowBack className="text-primary text-base rotate-180 cursor-pointer" />
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
    </section>
  );
};

export default PropertiesImageSlider;
