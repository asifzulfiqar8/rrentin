import InquiryRate from "@/components/owner/insights/InquiryRate";
import InsightEarning from "@/components/owner/insights/InsightEarning";
import PropertyPerformance from "@/components/owner/insights/PropertyPerformance";
import TenantDisputes from "@/components/owner/insights/TenantDisputes";
import TenantIntent from "@/components/owner/insights/TenantIntent";
import TopCards from "@/components/owner/insights/TopCards";
import TotalRevenue from "@/components/owner/insights/TotalRevenue";
import { earningsData, tenantIncomeLegendLabels, tenantIntent } from "@/data/data";

const Insights = () => {
  return (
    <div className="flex flex-col h-full gap-4">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        Insight Details
      </h3>
      <TopCards />
      <div className="grid grid-cols-3  h-[247px] gap-4 ">
        <div className="flex bg-white  h-[247px] shadow-md rounded-md">
          <TenantIntent
            title="Tenant Intent"
            data={tenantIntent}
            legend={tenantIncomeLegendLabels}
          />
        </div>
        <div className="flex bg-white  h-[247px] shadow-md rounded-md">
          <TotalRevenue />
        </div>
        <div className="flex bg-white  h-[247px] shadow-md rounded-md">
          <InquiryRate />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className=" bg-white h-[336px] p-5 shadow-md rounded-md">
          {/* <PropertyPerformance /> */}
        </div>
        <div className=" bg-white h-[336px] p-5 shadow-md rounded-md">
          <TenantDisputes />
        </div>
      </div>
      <div className="grid grid-cols-1 bg-white h-[370px] p-5 shadow-md rounded-md">
        <InsightEarning  data={earningsData}/>
      </div>
    </div>
  )
};

export default Insights;
