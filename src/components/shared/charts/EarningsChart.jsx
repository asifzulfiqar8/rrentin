"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Example data; tweak values to match your design exactly.
const sampleData = [
  { day: "Sun", current: 800, previous: 60 },
  { day: "Mon", current: 748, previous: 100 },
  { day: "Tue", current: 573, previous: 50 },
  { day: "Wed", current: 574, previous: 110 },
  { day: "Thu", current: 510, previous: 300 },
  { day: "Fri", current: 900, previous: 90 },
  { day: "Sat", current: 304, previous: 80 },
];

// Draws the vertical orange line, circle, and dollar label on hover
const CustomActiveDot = (props) => {
  const { cx, cy, value } = props;
  if (cx == null || cy == null) return null;
  return (
    <g>
      {/* Vertical orange line from the top of chart to the data point */}
      <line x1={cx} y1={0} x2={cx} y2={cy} stroke="#FB923C" strokeWidth={2} />
      {/* Dot at the hovered data point */}
      <circle
        cx={cx}
        cy={cy}
        r={5}
        fill="#FFF"
        stroke="#FB923C"
        strokeWidth={2}
      />
      {/* Label above the dot (e.g. "$510") */}
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        fill="#000"
        fontSize={14}
        fontWeight="bold"
      >
        {`$${value}`}
      </text>
    </g>
  );
};

// Optional floating tooltip box (if you also want the standard Recharts tooltip)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        <strong>{label}</strong>
        <div>{`$${payload[0].value}`}</div>
      </div>
    );
  }
  return null;
};

export default function EarningsChart({
  data = sampleData,
  width = "100%",
  height = 300,
}) {
  return (
    <div
      style={{ width, height }}
      className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm"
    >
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 15, right: 15, left: -15, bottom: 0 }}
        >
          {/* Gradients for the filled areas under each line */}
          <defs>
            <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Axes */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 1000]}
            ticks={[0, 50, 100, 150, 1000]}
            tickFormatter={(val) => (val === 1000 ? "1k+" : val)}
            tick={{ fill: "#666" }}
          />

          {/* Remove default grid lines or customize as needed */}
          <CartesianGrid horizontal={false} vertical={false} />

          {/* Tooltip with custom cursor disabled (we have our own vertical line) */}
          <Tooltip content={<CustomTooltip />} cursor={false} />

          {/* "Previous" line/area */}
          <Area
            type="monotone"
            dataKey="previous"
            stroke="#CBD5E1"
            strokeWidth={2}
            fill="url(#colorPrevious)"
            activeDot={false} // no hover effect for the "previous" line
          />

          {/* "Current" line/area with custom active dot */}
          <Area
            type="monotone"
            dataKey="current"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#colorCurrent)"
            activeDot={<CustomActiveDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
