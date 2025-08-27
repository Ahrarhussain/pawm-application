import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteIcon from "@mui/icons-material/Delete";

export function AssetCard({ name, status, totalValue }) {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col w-full max-w-sm">
      {/* Header */}
      <div className="bg-[#FFF1E6] px-4 py-3 rounded-t-xl text-lg font-semibold">
        {name}
      </div>

      {/* Body */}
      <div className="px-4 py-3 flex-1 text-gray-700">
        <p>Status: {status}</p>
        <p>Total Value: {totalValue}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-around items-center bg-gray-100 px-3 py-2 rounded-b-xl">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <FavoriteIcon className="text-red-500" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <BarChartIcon />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <ShareIcon />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200">
          <DeleteIcon className="text-red-500" />
        </button>
      </div>
    </div>
  );
}
