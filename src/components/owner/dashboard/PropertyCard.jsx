import Image from "next/image";
import Link from "next/link";

const getColor = (type) => {
  switch (type) {
    case "Most Demanding Property":
      return "text-[#FDAC3B]";
    case "Most Viewed Property" || "Most Rented Property":
      return "text-[#0245A5]";
    case "Least Demanding Property":
      return "text-[#E35454]";
    default:
      return "text-[#0245A5]";
  }
};

const PropertyCard = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative basis-full md:basis-[35%]">
        <Image
          src={data?.image}
          width={182}
          height={100}
          className="w-full h-full object-cover rounded-sm"
          alt="property image"
        />
        <div
          className={`absolute top-0 left-0 bg-white rounded-br-sm py-[3px] px-1 text-[10px] font-semibold ${getColor(
            data?.speciality
          )}`}
        >
          {data?.speciality}
        </div>
      </div>
      <div className="basis-full md:basis-[65%] flex flex-col justify-between">
        <div className="flex justify-between gap-5">
          <h4 className="text-sm md:text-base font-medium text-textColor">
            {data?.name}
          </h4>
          <span
            className={`${
              data?.rental === "Rent"
                ? "bg-[#1D7FFF1A] text-[#0245A5]"
                : "bg-[#E3545433] text-[#E35454]"
            } text-xs font-semibold rounded-xs py-[3px] px-[6px]`}
          >
            {data?.rental}
          </span>
        </div>
        <p className="text-xs md:text-sm text-[#969696]">
          123 Sunset Road, Phuket, Thailand
        </p>
        <div className="flex items-center justify-between">
          <p className="text-base md:text-lg font-semibold">
            ${data?.price}
            <span className="text-xs text-[#969696]">Per month</span>
          </p>
          <Link
            href=""
            className="bg-[#EEFFF2] rounded-xs p-[6px] text-sm font-semibold text-[#39DA4C]"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
