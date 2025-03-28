// import NotificationList from "@/components/owner/notification/NotificationList";

import NotificationList from "@/components/owner/notification/NotificationList";
import { notificationData } from "@/data/data";

const Notification = () => {


  return (
    <div className="bg-white rounded-lg px-3.5 py-5 ">
      <h3 className="text-lg md:text-[22px] font-semibold text-textColor mb-3.5">
        Notification
      </h3>
      <div>
        <NotificationList alerts={notificationData}/>
      </div>
    </div>
  );
};

export default Notification;
