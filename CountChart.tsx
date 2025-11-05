"use client";
import Image from "next/image";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Total", count: 100, fill: "White" },
  { name: "Girls", count: 45, fill: "#A5B4FC" },
  { name: "Boys", count: 55, fill: "#C3EBFA" },
];

const CountChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-full p-6 flex flex-col justify-between shadow-sm">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Students</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="relative w-full flex-1 flex items-center justify-center">
        {/* same 220x220 size for video-like look */}
        <div className="w-[220px] h-[220px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="65%"
              outerRadius="100%"
              barSize={18}
              data={data}
            >
              <RadialBar
                background
                dataKey="count"
                cornerRadius={50}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* Center icon */}
        <Image
          src="/maleFemale.png"
          alt="icon"
          width={70}
          height={70}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* BOTTOM */}
      <div className="flex justify-center gap-14 mt-4">
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 bg-[#C3EBFA] rounded-full" />
          <h1 className="font-bold text-sm text-gray-700">1,234</h1>
          <h2 className="text-xs text-gray-400">Boys (55%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-4 h-4 bg-[#FAE27C] rounded-full" />
          <h1 className="font-bold text-sm text-gray-700">1,234</h1>
          <h2 className="text-xs text-gray-400">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
