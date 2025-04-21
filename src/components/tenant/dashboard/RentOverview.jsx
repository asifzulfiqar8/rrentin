'use client';

import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const RentOverview = ({ title, data, totalTitle }) => {
  const totalRent = data.reduce((acc, cur) => acc + cur.value, 0);
  const COLORS = ['#0245A5', '#5390E0'];

  return (
    <div className="relative flex w-full flex-col items-center">
      <h2 className="mt-3.5 mb-2 text-lg font-semibold">{title}</h2>

      {/* Wrap chart in ResponsiveContainer */}
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart margin={{ top: 40, right: 0, left: 0, bottom: 0 }}>
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
              layout="horizontal"
              verticalAlign="top"
              content={({ payload }) => (
                <div className="mb-7 flex w-full flex-wrap justify-evenly gap-4 px-2">
                  {payload.map((entry, index) => {
                    const item = data.find(d => d.name === entry.value);
                    return (
                      <div key={index} className="flex items-start space-x-2">
                        {/* Legend Icon */}
                        <span
                          className="mt-1 h-3 w-3 rounded-sm"
                          style={{ backgroundColor: entry.color }}
                        />

                        {/* Legend Label */}
                        <div className="flex flex-col">
                          <span className="text-xs text-[#76808D]">{entry.value}</span>
                          <span className="mt-2 -ml-5 text-base font-medium text-black">
                            ${item?.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            />

            {/* Centered Total Text */}
            <text
              x="50%"
              y="70%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: '18px', fontWeight: 'bold' }}
            >
              ${totalRent}
            </text>

            <text
              x="50%"
              y="80%"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{ fontSize: '12px', fill: '#555' }}
            >
              {totalTitle}
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RentOverview;
