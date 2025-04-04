import React from 'react'
import PropertiesRented from './PropertiesRented'
import RentOverview from './RentOverview'
import RecentActivities from './RecentActivities'
import RecentChat from './RecentChat'
import CustomLineChart from '@/components/shared/charts/CustomLineChart'
import { earningsData } from '@/data/data'
import TenantTransactionHistory from './TenantTransactionHistory'

function TenantDashboard() {
  return (
    <div className="flex flex-col h-full gap-4">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor">
        Welcome! <span className='font-normal text-xl'>Mikal</span>
      </h3>
      <div className='w-full grid grid-cols-1 gap-4'>
        <div className='grid  grid-cols-12 gap-4'>
          <div className='  col-span-12 lg:col-span-5 '>
            <PropertiesRented />
          </div>
          <div className='  bg-white  col-span-12 lg:col-span-3 shadow-md w-full rounded-md'>
            <RentOverview />
          </div>
          <div className='  bg-white col-span-12 lg:col-span-4 shadow-md w-full rounded-md'>
            <RecentActivities />
          </div>
        </div>
        <div className='grid grid-cols-12  gap-4'>
          <div className='col-span-12 lg:col-span-5 shadow-md w-full rounded-md bg-white'>
            <RecentChat />
          </div>
          <div className='col-span-12 lg:col-span-7 shadow-md w-full rounded-md bg-white'>
            <CustomLineChart
              title={"Compilation Rate"}
              earningsData={earningsData}
            />

          </div>
        </div>
        <div className='grid grid-cols-1 shadow-md w-full rounded-md bg-white'>
          <TenantTransactionHistory />
        </div>
      </div>
    </div>
  )
}

export default TenantDashboard