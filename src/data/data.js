const notificationsData = [
  {
    reason: "Rent Payment Due",
    message: "Your rent of $1,500 is due on 5th Feb 2025.",
    time: "2 hours ago",
  },
  {
    reason: "New Maintenance Request",
    message: "A maintenance request has been submitted for plumbing repair.",
    time: "4 hours ago",
  },
  {
    reason: "Lease Renewal Reminder",
    message: "Your lease is expiring soon. Please review renewal options.",
    time: "1 day ago",
  },
  {
    reason: "Payment Received",
    message: "Your rent payment of $1,500 has been successfully processed.",
    time: "3 days ago",
  },
  {
    reason: "Security Alert",
    message: "Unusual login attempt detected. Please verify your account.",
    time: "5 days ago",
  },
];

const homeCardsData = [
  {
    title: "Total Revenue",
    value: "$273,38",
    valueAdded: "12",
    para: "It’s <span class='font-medium text-[#39DA4C]'>+$23.14</span> better then last month",
    img: "/images/dashboard/dollar.png",
  },
  {
    title: "Rental Field",
    value: "32%",
    valueAdded: "10",
    para: "Your properties are generating <span class='font-medium text-[#39DA4C]'>+10%</span> returns.",
    img: "/images/dashboard/rental.png",
  },
  {
    title: "Lease Renewal Rate",
    value: "77%",
    valueAdded: "43",
    para: "<span class='font-medium text-[#39DA4C]'>+43</span> of tenants have renewed their leases.",
    img: "/images/dashboard/lease.png",
  },
  {
    title: "Tenant Intent",
    value: "45%",
    valueAdded: "23",
    para: "<span class='font-medium text-[#39DA4C]'>+43%</span> tenants showed interest in leasing.",
    img: "/images/dashboard/tenant.png",
  },
  {
    title: "Inquiry Rate",
    value: "123",
    valueAdded: "08",
    para: "<span class='font-medium text-[#E35454]'>+$8.45</span> growth in tenant inquiries.",
    img: "/images/dashboard/rental.png",
  },
];

const totalEarningsChartData = [
  { month: "January", desktop: 1260, mobile: 570 },
];
const totalEarningschartConfig = {
  desktop: { label: "Earned Amount", color: "#5390E0" },
  mobile: { label: "Withdrawn Amount", color: "#0245A5" },
};

const incomeBreakdata = [
  { name: "Total Rent Collected", value: 40 },
  { name: "Pending Payments", value: 30 },
  { name: "Expenses", value: 30 },
];

const incomeLegendLabels = [
  "Total Rent Collected (40%)",
  "Pending Payments (30%)",
  "Expenses (30%)",
];

export {
  notificationsData,
  homeCardsData,
  totalEarningsChartData,
  totalEarningschartConfig,
  incomeBreakdata,
  incomeLegendLabels,
};
