"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", present: 60, absent: 40 },
  { name: "Tue", present: 70, absent: 60 },
  { name: "Wed", present: 90, absent: 75 },
  { name: "Thu", present: 90, absent: 75 },
  { name: "Fri", present: 65, absent: 55 },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-2xl w-full h-[350px] sm:h-[400px] p-6 flex flex-col justify-between shadow-sm">
      {/* TITLE */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold text-gray-700">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      {/* CHART */}
      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#A5B4FC", fontSize: 12 }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              tick={{ fill: "#86EFAC", fontSize: 12 }}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                borderColor: "#ddd",
                backgroundColor: "#fff",
              }}
            />
            <Legend
              align="center"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "20px" }}
            />
            <Bar
              dataKey="present"
              fill="#A5B4FC"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="absent"
              fill="#C3EBFA"
              legendType="circle"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
