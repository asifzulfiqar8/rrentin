const tableStyles = {
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#7E7E7E",
      borderBottom: "1px solid #32343CB2 !important",
    },
  },
  rows: {
    style: {
      background: "transparent",
      padding: "10px 0",
      margin: "0",
      borderBottomStyle: "dashed !important",
    },
  },
  cells: {
    style: {
      color: "#32343C",
      fontSize: "13px",
    },
  },
};
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
    img: "/images/dashboard/inquiry.png",
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

const earningsData = [
  { day: "Sun", current: 800, previous: 60 },
  { day: "Mon", current: 748, previous: 100 },
  { day: "Tue", current: 573, previous: 50 },
  { day: "Wed", current: 574, previous: 110 },
  { day: "Thu", current: 510, previous: 300 },
  { day: "Fri", current: 900, previous: 90 },
  { day: "Sat", current: 304, previous: 80 },
];

const propertiesData = [
  {
    name: "Charming Homes in Thailand",
    address: "123 Sunset Road, Phuket, Thailand",
    price: "234",
    image: "/images/dashboard/property-card-1.png",
    speciality: "Most Demanding Property",
    rental: "Rent",
  },
  {
    name: "Luxury Villa in Dubai",
    address: "45 Palm Jumeirah, Dubai, UAE",
    price: "890",
    image: "/images/dashboard/property-four.jpeg",
    speciality: "Most Viewed Property",
    rental: "Free",
  },
  {
    name: "Modern Apartment in New York",
    address: "789 5th Avenue, Manhattan, NY",
    price: "1250",
    image: "/images/dashboard/property-two.jpeg",
    speciality: "Most Viewed Property",
    rental: "Rent",
  },
  {
    name: "Cozy Cottage in Switzerland",
    address: "56 Lake Road, Interlaken, Switzerland",
    price: "670",
    image: "/images/dashboard/property-three.jpeg",
    speciality: "Least Demanding Property",
    rental: "Rent",
  },
  {
    name: "Beachfront House in Bali",
    address: "101 Ocean Drive, Bali, Indonesia",
    price: "450",
    image: "/images/dashboard/property-four.jpeg",
    speciality: "Most Rented Property",
    rental: "Rent",
  },
];

const bookingSummaryData = [
  {
    _id: 1,
    tenantName: "John Doe",
    propertyName: "Apartment #12",
    agentInvolved: "Sarah Johnson",
    leasePeriod: "Jan 2025 - Dec 2025",
    monthlyRent: "$1200",
    totalCharges: "$12092",
    action: "",
  },
  {
    _id: 2,
    tenantName: "Emma Smith",
    propertyName: "Villa #5",
    agentInvolved: "Michael Brown",
    leasePeriod: "Feb 2025 - Jan 2026",
    monthlyRent: "$2500",
    totalCharges: "$30100",
    action: "",
  },
  {
    _id: 3,
    tenantName: "Liam Williams",
    propertyName: "Studio #8",
    agentInvolved: "David Lee",
    leasePeriod: "Mar 2025 - Feb 2026",
    monthlyRent: "$900",
    totalCharges: "$10850",
    action: "",
  },
  {
    _id: 4,
    tenantName: "Olivia Taylor",
    propertyName: "Penthouse #3",
    agentInvolved: "Jessica White",
    leasePeriod: "Apr 2025 - Mar 2026",
    monthlyRent: "$3200",
    totalCharges: "$38500",
    action: "",
  },
  {
    _id: 5,
    tenantName: "Noah Martinez",
    propertyName: "House #15",
    agentInvolved: "Daniel Wilson",
    leasePeriod: "May 2025 - Apr 2026",
    monthlyRent: "$1800",
    totalCharges: "$21500",
    action: "",
  },
  {
    _id: 6,
    tenantName: "Sophia Anderson",
    propertyName: "Condo #22",
    agentInvolved: "Emily Davis",
    leasePeriod: "Jun 2025 - May 2026",
    monthlyRent: "$1400",
    totalCharges: "$16850",
    action: "",
  },
];

const propertiesCardsData = [
  {
    title: "Total Properties",
    value: "12",
    para: "You have 12 properties in your portfolio.",
    img: "/images/properties/dollar.png",
  },
  {
    title: "Free Property",
    value: "32",
    para: "03 properties are actively rented out.",
    img: "/images/properties/dollar.png",
  },
  {
    title: "Rented Property",
    value: "09",
    para: "09 properties are currently free for rent.",
    img: "/images/properties/dollar.png",
  },
  {
    title: "Pending Approvals",
    value: "09",
    para: "These properties are waiting for admin approval to go live.",
    img: "/images/properties/dollar.png",
  },
  {
    title: "Property Views",
    value: "4,474",
    para: "It’s<span class='font-medium text-[#E35454]'> +$43.14 </span>better then last month.",
    img: "/images/dashboard/tenant.png",
  },
];

const myPropertiesData = [
  {
    _id: 1,
    house: "Residential Flat",
    name: "Dream House",
    speciality: "Most Demanded Property",
    address: "Evergreen 15 Jakarta, Thailand",
    price: "388",
    ratings: "4.8",
    image: "/images/dashboard/property-card-1.png",
  },
  {
    _id: 2,
    house: "Condominium",
    name: "Ocean View",
    speciality: "Luxury Living",
    address: "Sunset Boulevard, Miami, USA",
    price: "550",
    ratings: "4.9",
    image: "/images/dashboard/property-two.jpeg",
  },
  {
    _id: 3,
    house: "Townhouse",
    name: "City Escape",
    speciality: "Urban Delight",
    address: "Downtown 10, New York, USA",
    price: "420",
    ratings: "4.7",
    image: "/images/dashboard/property-three.jpeg",
  },
  {
    _id: 4,
    house: "Apartment",
    name: "Sky High",
    speciality: "Modern Living",
    address: "High Street 20, London, UK",
    price: "480",
    ratings: "4.6",
    image: "/images/dashboard/property-four.jpeg",
  },
  {
    _id: 5,
    house: "Residential Flat",
    name: "Green Residence",
    speciality: "Eco Friendly",
    address: "Green Park 5, Berlin, Germany",
    price: "360",
    ratings: "4.5",
    image: "/images/dashboard/property-two.jpeg",
  },
  {
    _id: 6,
    house: "Penthouse",
    name: "Luxury Loft",
    speciality: "Exclusive",
    address: "Central Ave 33, Dubai, UAE",
    price: "750",
    ratings: "5.0",
    image: "/images/dashboard/property-card-1.png",
  },
  {
    _id: 7,
    house: "Studio",
    name: "Compact Living",
    speciality: "Budget Friendly",
    address: "Market Street 12, San Francisco, USA",
    price: "320",
    ratings: "4.3",
    image: "/images/dashboard/property-three.jpeg",
  },
  {
    _id: 8,
    house: "Villa",
    name: "Paradise Retreat",
    speciality: "Beachside Bliss",
    address: "Ocean Drive 22, Malibu, USA",
    price: "680",
    ratings: "4.9",
    image: "/images/dashboard/property-four.jpeg",
  },
  {
    _id: 9,
    house: "Duplex",
    name: "Family Haven",
    speciality: "Spacious & Comfortable",
    address: "Maple Street 8, Toronto, Canada",
    price: "500",
    ratings: "4.7",
    image: "/images/dashboard/property-two.jpeg",
  },
];

export {
  notificationsData,
  homeCardsData,
  totalEarningsChartData,
  totalEarningschartConfig,
  incomeBreakdata,
  incomeLegendLabels,
  earningsData,
  propertiesData,
  tableStyles,
  bookingSummaryData,
  propertiesCardsData,
  myPropertiesData,
};
