import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#00739D", "#FC5A5A", "#50C878"];

export const RePieChart = ({ assetData }) => {
  let physicalData = 0;
  let shareData = 0;
  let cryptoData = 0;
  let totalData = 0;

  assetData.forEach((item) => {
    let x = parseInt(item.assetTotalValue) || 0;
    totalData += x;

    if (item.assetType === "Shares") {
      shareData += x;
    } else if (item.assetType === "Crypto") {
      cryptoData += x;
    } else {
      physicalData += x;
    }
  });

  const data = [
    { name: "Physical Assets", value: physicalData },
    { name: "Shares", value: shareData },
    { name: "Crypto", value: cryptoData },
  ];

  return (
    <div className="w-full h-[450px] flex items-center justify-center bg-white rounded-xl shadow-md p-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            dataKey="value"
            outerRadius={150}
            innerRadius={80}
            label
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
  );
};
