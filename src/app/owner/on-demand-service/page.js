"use client";
import { PropertyInspection, ShowAgent } from "@/assets/icon";
import { useRouter } from "next/navigation";

const OnDemandService = () => {
  const router = useRouter();

  const navigateToInspection = () => {
    router.push(`/owner/inspection`);
  };
  const navigateToAgent = () => {
    router.push(`/owner/agent/hiring-new-agent`);
  };

  return (
    <div>
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        Choose Assistance
      </h3>
      <div className="px-14 grid grid-cols-1 lg:grid-cols-2 mt-4 gap-6">
        <div
          onClick={navigateToInspection}
          className="flex flex-col cursor-pointer hover:bg-blue-200 w-full h-[290px] items-center justify-center shadow-ld bg-white rounded-md"
        >
          <div>
            <PropertyInspection />
          </div>
          <div className="mt-3.5">
            <p className="text-2xl font-semibold">Property Inspection</p>
          </div>
          <div className="w-[300px] lg:w-[445px] text-center">
            <p className="text-base font-normal text-[#32343C]">
              Ensure your property is verified and inspected before listing.
              Get a professional inspection report.
            </p>
          </div>
        </div>
        <div
          onClick={navigateToAgent}
          className="flex flex-col cursor-pointer hover:bg-blue-200 w-full h-[290px] items-center justify-center shadow-ld bg-white rounded-md"
        >
          <div>
            <ShowAgent />
          </div>
          <div className="mt-3.5">
            <p className="text-2xl font-semibold">Showing Agent</p>
          </div>
          <div className="w-[300px] lg:w-[445px] text-center">
            <p className="text-base font-normal text-[#32343C]">
              A professional agent will manage all property showings,
              coordinate with tenants, and provide guided tours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnDemandService;
