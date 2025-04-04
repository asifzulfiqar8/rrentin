"use client"; // Ensures this runs only on the client side

import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const data = [
  { name: "Paid Rent", value: 2000 },
  { name: "Pending Rent", value: 1200 },
];

const totalRent = data.reduce((acc, cur) => acc + cur.value, 0);
const COLORS = ["#0245A5", "#5390E0"];

const RentOverview = () => {
  return (
    <div className="flex relative flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 mt-3.5">Rent Overview</h2>
      <PieChart
        margin={{ top: 40, right: 0, left: 0, bottom: 0 }}

        width={400} height={200}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="80%"
          startAngle={180}
          endAngle={0}
          innerRadius={70}
          outerRadius={90}
          cornerRadius={5}
          paddingAngle={4}
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          className="mt-7"
          layout="horizontal"
          verticalAlign="top"
          align="center"
          formatter={(value, entry) => {
            const item = data.find(d => d.name === value);
            return (
              <span className="text-sm space-x-5 font-medium">
                <span className="text-[#76808D] text-xs">{value}</span>
                <br />
                <span className="text-black font-medium text-base">${item?.value}</span>
              </span>
            );
          }}
        />
        {/* Centered Text: Total Rent */}
        <text
          x="50%"
          y="70%"  // Adjusted for better centering
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "18px", fontWeight: "bold" }}
        >
          ${totalRent}
        </text>

        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          dominantBaseline="middle"
          style={{ fontSize: "12px", fill: "#555" }}
        >
          Total Rent
        </text>
      </PieChart>
    </div>
  );
};

export default RentOverview;
