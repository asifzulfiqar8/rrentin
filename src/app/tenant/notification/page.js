import TenantNotification from '@/components/tenant/notification/TenantNotification'
import { notificationData } from '@/data/data'
import React from 'react'

function Notification() {
  return (
    <div className="bg-white rounded-lg px-3.5 py-5 ">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor mb-3.5">
        Notification
      </h3>
      <div>
        <TenantNotification alerts={notificationData} />
      </div>
    </div>
  )
}

export default Notification