"use client";

import { useState } from "react";
import SubscriptionPlan from "./SubscriptionPlan";
import AlreadySubscribed from "./AlreadySubscribed";

const MembershipDetails = () => {
  const [tab, setTab] = useState("Subcription Plans");
  return (
    <div>
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor mb-4">
        Membership Details
      </h3>
      <div className="inline-flex items-center bg-white p-[6px] rounded-[8px] shadow-custom mb-[18px]">
        {["Subcription Plans", "Already Subscribed"].map((item, i) => (
          <button
            key={i}
            className={`py-2 px-4 rounded-md text-sm cursor-pointer ${
              tab === item
                ? "text-white font-semibold bg-primary"
                : "text-[#474950] font-medium bg-transparent"
            }`}
            onClick={() => setTab(item)}
          >
            {item}
          </button>
        ))}
      </div>
      {tab === "Subcription Plans" && <SubscriptionPlan />}
      {tab === "Already Subscribed" && <AlreadySubscribed />}
    </div>
  );
};

export default MembershipDetails;
