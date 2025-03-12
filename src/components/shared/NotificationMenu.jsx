import { notificationsData } from "@/data/data";
import Image from "next/image";
import { RiArrowRightUpLine } from "react-icons/ri";

const NotificationMenu = ({ isNotificationOpen }) => {
  return (
    <div
      className={`absolute top-[45px] right-0 w-[300px] md:w-[400px] bg-white rounded-lg py-4 px-5 transition-all duration-200 overflow-y-scroll custom-scroll ${
        isNotificationOpen
          ? "h-[300px] md:h-[500px] opacity-100"
          : "h-0 opacity-0"
      }`}
      style={{ boxShadow: "0px 2px 12px 0px #3582E71A" }}
    >
      <h6 className="text-base md:text-xl font-semibold text-[#32343C]">
        Notifications
      </h6>
      <div className="mt-4">
        <h6 className="text-sm md:text-base font-medium text-[#32343C]">
          Today
        </h6>
        <div className="mt-4 flex flex-col gap-4">
          {notificationsData.slice(0, 3).map((list, i) => (
            <List list={list} key={i} />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <h6 className="text-sm md:text-base font-medium text-[#32343C]">
          Yesterday
        </h6>
        <div className="mt-4 flex flex-col gap-4">
          {notificationsData.slice(0, 3).map((list, i) => (
            <List list={list} key={i} />
          ))}
        </div>
      </div>
      {/* view more button */}
      <div className="mt-4">
        <button className="flex items-center justify-center gap-2 bg-[#0245A5] py-[6px] px-2 rounded-[4px] text-white text-sm font-medium mx-auto cursor-pointer">
          View more
          <RiArrowRightUpLine className="text-white text-base mt-1" />
        </button>
      </div>
    </div>
  );
};

export default NotificationMenu;

const List = ({ list }) => {
  return (
    <div className="flex items-center gap-[14px] border-b border-[#5F5F5F33] pb-[10px]">
      <Image
        src="https://placehold.co/100x100"
        width={28}
        height={28}
        alt="flag image"
        className="size-[28px] object-cover rounded-full"
      />
      <div>
        <h6 className="text-xs md:text-sm text-[#5F5F5F]">
          <span className="font-medium">{list?.reason}</span> - {list?.message}
        </h6>
        <span className="text-[#5F5F5F99] text-xs">{list?.time}</span>
      </div>
    </div>
  );
};
