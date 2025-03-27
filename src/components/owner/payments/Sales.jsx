'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const data = [
    { name: 'Rental Properties $1000,000', value: 20 },
    { name: 'Net Revenue 15,000', value: 40 },
];


const COLORS = ['#003480', '#90BEFF'];

const Sales = () => {
    return (
        <div className="px-5 py-4 bg-white h-[337px] rounded-lg shadow-lg flex flex-col">
            {/* Chart Title */}
            <div className="flex flex-col">
                <h1 className="text-sm font-semibold mb-2">Sales vs. Rentals Revenue</h1>
                <h1 className="text-sm text-[#717579] mb-2">Rental Properties vs. Net Revenue</h1>
            </div>
            {/* Pie Chart Container */}
            <div className="w-full flex-1 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="90%">
                    <PieChart
                        margin={{ top: -20, right: 10, left: -10, bottom: -20 }}
                    >
                        <Pie
                            data={data}
                            // Center the pie in the middle of the container
                            cx="50%"
                            cy="50%"
                            // Adjust inner/outer radius to change the donut thickness
                            innerRadius={60}
                            outerRadius={80}
                            // Increase or decrease for more/less gap between slices
                            paddingAngle={5}
                            // Rounded edges on slices
                            cornerRadius={8}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Custom Legend */}
            <div className=" grid grid-cols-2 space-x-1">
                {data.map((entry, index) => (
                    <div key={index} className="flex gap-2 items-center justify-center space-y-4 text-sm">
                        {/* Colored circle for each slice */}
                        <div className='flex items-center justify-center'>

                            <span
                                className="inline-block w-3 h-3 rounded-full"
                                style={{ backgroundColor: COLORS[index] }}
                            />
                        </div>
                        <div>

                            <span className='text-xs'>{entry.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sales;


// export default Sales