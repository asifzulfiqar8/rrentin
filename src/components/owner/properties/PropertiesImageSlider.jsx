"use client";
import Image from "next/image";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BathIcon from '../../../assets/propertyDetails/BathIcon';
import BedIcon from '../../../assets/propertyDetails/BedIcon';
import FloorsIcon from '../../../assets/propertyDetails/FloorsIcon';
import SqmIcon from '../../../assets/propertyDetails/SqmIcon';

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

// Combine main and side images for the modal carousel
const allImages = [...mainImages, ...sideImages];

const Modal = ({ onClose, children, width }) => {
  return (
    <div
      className="modal bg-[#000000c5] fixed top-0 left-0 inset-0 z-[99] p-6 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-[12px] shadow-lg overflow-hidden ${width ? width : "w-[300px] md:w-[400px] lg:w-[700px] xl:w-[900px]"} h-[400px]`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const PropertiesImageSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Open modal with the correct starting slide
  const openModal = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
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
                <div onClick={() => openModal(i)} className="cursor-pointer">
                  <Image
                    src={img}
                    width={700}
                    height={380}
                    alt={`Main image ${i + 1}`}
                    className="w-full h-[380px] object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute flex items-center justify-between w-full top-[50%] translate-y-[-50%] z-50 px-6">
            <div className="custom-next bg-white rounded-full grid place-items-center p-1">
              <IoIosArrowBack className="text-primary  text-base cursor-pointer -ml-[2px]" />
            </div>
            <div className="custom-prev bg-white rounded-full grid place-items-center p-1">
              <IoIosArrowBack className="text-primary text-base rotate-180 cursor-pointer -mr-[2px]" />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="lg:col-span-4 grid grid-cols-2 grid-rows-2 gap-4">
          {sideImages.slice(0, 3).map((img, i) => (
            <div
              key={i}
              className="relative cursor-pointer"
              onClick={() => openModal(mainImages.length + i)}
            >
              <Image
                src={img}
                alt={`Side image ${i + 1}`}
                width={221}
                height={185}
                className="w-full h-[180px] object-cover rounded-lg"
              />
            </div>
          ))}
          {sideImages.length > 3 && (
            <div
              className="relative cursor-pointer"
              onClick={() => openModal(mainImages.length + 3)}
            >
              <Image
                src={sideImages[3]}
                alt="Side image 4"
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
        <div className="grid grid-cols-2 lg:col-span-12 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold text-black">
                The Crest Sukhumvit 34, Bangkok
              </span>
              <span className="text-sm font-bold text-[#34C759] bg-[#34C75926] px-2 py-1.5 rounded-lg">
                Available
              </span>
            </div>
            <span className="text-lg text-[#32343C] block">
              778 Sukhumvit Road, Khong Tan, Khlong Toei, Bangkok
            </span>
            <div className="text-[43px] font-bold">
              $243
              <span className="text-base text-[#32343C]"> / month</span>
            </div>
            <button className="flex items-center gap-2 w-[87px] h-10 bg-primary text-white text-base lg:text-xl font-medium rounded-xl cursor-pointer justify-center">
              <FaEdit className="text-white text-base lg:text-xl" />
              Edit
            </button>
          </div>
          {/* Property Features */}
          <div className="flex items-center justify-end gap-8">
            {[
              { icon: <BedIcon />, label: "Bed", count: 2 },
              { icon: <BathIcon />, label: "Bath", count: 2 },
              { icon: <SqmIcon />, label: "Sqm", count: 2 },
              { icon: <FloorsIcon />, label: "Floors", count: 2 },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-[#0245A5]">
                {item.icon}
                <span className="text-lg font-medium">{item.count}</span>
                <span className="text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Section */}
      {modalOpen && (
        <Modal onClose={closeModal}>
          <div className="relative h-full">
            <Swiper
              modules={[Navigation, Pagination]}
              initialSlide={selectedIndex}
              slidesPerView={1}
              spaceBetween={10}
              navigation={{ nextEl: ".modal-next", prevEl: ".modal-prev" }}
              pagination={{ clickable: true }}
              className="h-full"
            >
              {allImages.map((img, i) => (
                <SwiperSlide key={i} className="h-full">
                  <div className="h-full relative">
                    <Image
                      src={img}
                      alt={`Carousel image ${i + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom navigation arrows for modal */}
            <div className="modal-prev bg-white rounded-full  size-5 flex items-center justify-center absolute left-4 top-1/2 z-50 transform -translate-y-1/2 cursor-pointer">
              <IoIosArrowBack className="text-primary text-lg cursor-pointer -ml-[2px]" />
            </div>
            <div className="modal-next absolute size-5 flex items-center justify-center bg-white rounded-full right-4 top-1/2 z-50 transform -translate-y-1/2 cursor-pointer">
              <IoIosArrowBack className="text-primary text-lg cursor-pointer -ml-[2px] rotate-180" />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default PropertiesImageSlider;
