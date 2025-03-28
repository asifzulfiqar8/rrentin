import React from 'react';
import { IoIosAlert } from 'react-icons/io';
import { MdOutlineShowChart } from 'react-icons/md';

const NotificationItem = ({ image, binName, binPercentage, time1, time2, status }) => {
    const isFull = status.toLowerCase().includes("full");

    return (
        <div className="flex w-full py-2 border-b-[1px]">
            <div>
                <img src={image} alt="Bin" className="w-10 h-10 object-contain" />
            </div>
            <div className="flex items-center justify-between w-full ml-2">
                <div className="mr-4 text-[#5F5F5F] font-medium">
                  {binName} <span className="font-normal text-[#5F5F5F]">{binName}</span>
                </div>
                <span className="text-[#5F5F5F99] text-xs">{time2}</span>
            </div>
        </div>
    );
};

const NotificationList = ({ alerts }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getDiffDays = (dateStr) => {
        const alertDate = new Date(dateStr);
        alertDate.setHours(0, 0, 0, 0);
        const diffTime = today - alertDate;
        return diffTime / (1000 * 3600 * 24);
    };

    const getDayLabel = (dateStr) => {
        const diffDays = getDiffDays(dateStr);
        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays <= 7) {
            return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' });
        }
        return 'Previous';
    };

    const groups = {};
    alerts.forEach((alert) => {
        const diffDays = getDiffDays(alert.date);
        const label = getDayLabel(alert.date);
        if (!groups[label]) {
            groups[label] = { alerts: [], minDiff: diffDays };
        } else {
            groups[label].minDiff = Math.min(groups[label].minDiff, diffDays);
        }
        groups[label].alerts.push(alert);
    });

    const sortedGroups = Object.entries(groups).map(([label, group]) => ({
        label,
        alerts: group.alerts,
        minDiff: group.minDiff,
    }));

    sortedGroups.sort((a, b) => {
        const orderValue = (group) => {
            if (group.label === 'Today') return 0;
            if (group.label === 'Yesterday') return 1;
            if (group.label === 'Previous') return 1000;
            return group.minDiff;
        };
        return orderValue(a) - orderValue(b);
    });

    return (
        <div>
            {sortedGroups.map((group) => (
                <div key={group.label}>
                    <h3 className="text-lg text-textColor font-bold mb-2">{group.label}</h3>
                    {group.alerts.map((alert, index) => (
                        <NotificationItem
                            key={index}
                            image={alert.image}
                            binName={alert.binName}
                            binPercentage={alert.binPercentage}
                            time1={alert.time1}
                            time2={alert.time2}
                            status={alert.status}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default NotificationList;
