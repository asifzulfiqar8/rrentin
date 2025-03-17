import { PieChartHalf } from "@/components/shared/charts/PieChartHalf";
import HomeCards from "./HomeCards";
import Welcome from "./Welcome";
import {
  incomeBreakdata,
  incomeLegendLabels,
  totalEarningschartConfig,
  totalEarningsChartData,
} from "@/data/data";
import CustomPieChart from "@/components/shared/charts/CustomPieChart";
import MyProperties from "./MyProperties";
import EarningsChart from "@/components/shared/charts/EarningsChart";

const Dashboard = () => {
  return (
    <>
      <Welcome />
      <HomeCards />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-4">
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          <div className="lg:col-span-6">
            <PieChartHalf
              title="Payment Overview"
              data={totalEarningsChartData}
              config={totalEarningschartConfig}
              totalLabel="Total Earnings"
            />
          </div>
          <div className="lg:col-span-6">
            <CustomPieChart
              title="Income Breakdown"
              data={incomeBreakdata}
              legend={incomeLegendLabels}
            />
          </div>
          <div className="lg:col-span-12">
            <EarningsChart />
          </div>
        </div>
        <div className="lg:col-span-5">
          <MyProperties />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
