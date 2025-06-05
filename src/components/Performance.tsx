"use client";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import React from "react";

type PieData = {
  name: string;
  value: number;
  fill?: string;
};

type PerformanceProps = {
  data: PieData[][];
};

const Performance: React.FC<PerformanceProps> = ({ data }) => {
  // You can create a combined summary dataset for the large pie chart
  const summaryData: PieData[] = [
    { name: "Average", value: Math.round(data.reduce((acc, d) => acc + d[0].value, 0) / data.length), fill: "#C3EBFA" },
    { name: "Remaining", value: 100 - Math.round(data.reduce((acc, d) => acc + d[0].value, 0) / data.length), fill: "#FAE27C" },
  ];

  return (
    <div className="bg-white p-4 rounded-md h-80 relative overflow-visible">
      <div className="flex items-center justify-between mb-2 z-10 relative">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-3">
        {/* PROGRESS BAR */}
        <div className="w-[65%] bg-white p-2 rounded-2xl shadow">
          <div className="w-full h-9 bg-[#FAE27C] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: '70%',
                backgroundColor: '#C3EBFA',
              }}
            ></div>
          </div>
        </div>

        {/* Label */}
        <h1 className="text-center font-semibold text-black">PROGRESS BAR</h1>
      </div>

      



      {/* LARGE CENTER PIE CHART
      <div className="absolute top-1/2 left-1/2 w-52 h-52 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={summaryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
            >
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div> */}

        {/* Label inside center pie
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold">{summaryData[0].value}%</h1>
          <p className="text-xs text-gray-400">Overall</p>
        </div>
      </div> */}

      {/* THREE SMALL PIE CHARTS */}
      <div className="flex justify-between h-3/4 relative z-0">
        {data.map((dataset, index) => (
          <div key={index} className="w-1/3 h-full px-1 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={dataset}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={45}
                >
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center label inside each chart */}
            <div className="absolute text-center">
              <h1 className="text-lg font-bold">{dataset[0]?.value ?? "-"}%</h1>
              <p className="text-xs text-gray-400">{dataset[0]?.name}</p>
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
};

export default Performance;
