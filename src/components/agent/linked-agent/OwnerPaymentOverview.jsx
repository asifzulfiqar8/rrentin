'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

// Sample data (you can increase this list)
const data = [
  { name: 'Luxury Apartment', price: 120000 },
  { name: 'Villa', price: 180000 },
  { name: 'Cottage', price: 95000 },
  { name: 'Dream Plan', price: 210000 },
  { name: 'Condo', price: 145000 },
  { name: 'Studio Flat', price: 70000 },
  { name: 'Penthouse', price: 230000 },
  { name: 'Farmhouse', price: 160000 },
  { name: 'Duplex', price: 110000 },
];

// Constants for dynamic bar width
const maxBarWidth = 65;
const chartWidth = 900; // You can tweak this or make it responsive
const barGap = 20; // Gap between bars

const OwnerPaymentOverview = ({ title }) => {
  // Calculate dynamic bar size
  const barCount = data.length;
  const calculatedBarWidth = Math.min(
    maxBarWidth,
    (chartWidth - barGap * (barCount - 1)) / barCount
  );

  return (
    <div className="h-full w-full">
      <h1 className="font-lg font-semibold">{title}</h1>
      <div style={{ width: '100%', height: 330 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={chartWidth}
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            barGap={barGap}
          >
            {/* define the gradient once, using standard SVG tags */}
            <defs>
              <linearGradient id="priceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0245A5" stopOpacity={1} />
                <stop offset="100%" stopColor="rgba(2,69,165,0)" stopOpacity={1} />
              </linearGradient>
            </defs>

            <XAxis dataKey="name" angle={0} textAnchor="end" interval={0} height={80} />
            <YAxis tickFormatter={value => `$${value / 1000}k`} />
            <Tooltip formatter={value => `$${value.toLocaleString()}`} />

            {/* apply the gradient URL to every bar */}
            <Bar
              dataKey="price"
              barSize={calculatedBarWidth}
              fill="url(#priceGradient)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OwnerPaymentOverview;
