import BookingSummary from '@/components/owner/dashboard/BookingSummary';
import HomeCards from '@/components/owner/dashboard/HomeCards';
import MyProperties from '@/components/owner/dashboard/MyProperties';
import Welcome from '@/components/owner/dashboard/Welcome';
import CustomLineChart from '@/components/shared/charts/CustomLineChart';
import RecentActivities from '@/components/tenant/dashboard/RecentActivities';
import RentOverview from '@/components/tenant/dashboard/RentOverview';
import { agentHomeCardsData, agentIncomeOverview, earningsData } from '@/data/data';
import dynamic from 'next/dynamic';

const CustomPieChart = dynamic(() => import('@/components/shared/charts/CustomPieChart'));
const AgentDashboard = () => {
  return (
    <>
      <Welcome />
      <HomeCards data={agentHomeCardsData} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-4">
        <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm lg:col-span-6 xl:col-span-12 2xl:col-span-6">
            <RentOverview
              title={'Income OverView'}
              data={agentIncomeOverview}
              totalTitle={'Total Income'}
            />
          </div>
          <div className=" bg-white rounded-lg border p-4 lg:p-5 shadow-sm lg:col-span-6 xl:col-span-12 2xl:col-span-6">
            <RecentActivities />
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

export default AgentDashboard;

// export default AgentDashboard;
