import { RightArrowForwardIcon } from "@/assets/icon";
import Image from "next/image";
import Link from "next/link";
import PropertyCard from "./PropertyCard";
import { propertiesData } from "@/data/data";

const MyProperties = () => {
  return (
    <div className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm h-full max-h-[688px] overflow-y-scroll scroll-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] text-sm font-semibold text-textColor">
          <Image
            src="/images/dashboard/rental.png"
            width={32}
            height={32}
            alt="icon"
          />
          My Properties
        </div>
        <Link href="">
          <RightArrowForwardIcon />
        </Link>
      </div>
      <div className="mt-[18px] flex flex-col gap-4 md:gap-6">
        {propertiesData.slice(0, 5).map((card, i) => (
          <PropertyCard data={card} key={i} />
        ))}
      </div>
    </div>
  );
};

export default MyProperties;
