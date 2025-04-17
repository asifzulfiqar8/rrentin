'use client';

import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const RentOverview = ({ title, data, totalTitle }) => {
  const totalRent = data.reduce((acc, cur) => acc + cur.value, 0);
  const COLORS = ['#0245A5', '#5390E0'];

  return (
    <div className="flex w-full relative flex-col items-center">
      <h2 className="text-lg font-semibold mb-2 mt-3.5">{title}</h2>

      {/* Wrap chart in ResponsiveContainer */}
      <div className="w-full h-[200px]">
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
                <div className="flex flex-wrap justify-evenly gap-4 w-full mb-7 px-2">
                  {payload.map((entry, index) => {
                    const item = data.find((d) => d.name === entry.value);
                    return (
                      <div key={index} className="flex items-start space-x-2 ">
                        {/* Legend Icon */}
                        <span
                          className="w-3 h-3 rounded-sm mt-1"
                          style={{ backgroundColor: entry.color }}
                        />

                        {/* Legend Label */}
                        <div className="flex flex-col">
                          <span className="text-[#76808D] text-xs">{entry.value}</span>
                          <span className="text-black -ml-5 mt-2 font-medium text-base">
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
