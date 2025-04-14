import dynamic from "next/dynamic";
import { PieChartHalf } from "@/components/shared/charts/PieChartHalf";
import HomeCards from "./HomeCards";
import Welcome from "./Welcome";
import {
  earningsData,
  incomeBreakdata,
  incomeLegendLabels,
  totalEarningschartConfig,
  totalEarningsChartData,
} from "@/data/data";
import MyProperties from "./MyProperties";
import CustomLineChart from "@/components/shared/charts/CustomLineChart";
import BookingSummary from "./BookingSummary";
const CustomPieChart = dynamic(() =>
  import("@/components/shared/charts/CustomPieChart")
);

const Dashboard = () => {
  return (
    <>
      <Welcome />
      <HomeCards />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-4">
        <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-6 xl:col-span-12 2xl:col-span-6">
            <PieChartHalf
              title="Payment Overview"
              data={totalEarningsChartData}
              config={totalEarningschartConfig}
              totalLabel="Total Earnings"
            />
          </div>
          <div className="lg:col-span-6 xl:col-span-12 2xl:col-span-6">
            <CustomPieChart
              title="Income Breakdown"
              data={incomeBreakdata}
              legend={incomeLegendLabels}
            />
          </div>
          <div className="lg:col-span-12">
            <div className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
              <CustomLineChart earningsData={earningsData} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <MyProperties />
        </div>
        <div className="lg:col-span-12">
          <BookingSummary />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
