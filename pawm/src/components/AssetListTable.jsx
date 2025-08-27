import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

export const AssetListTable = ({ assetData }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);

  // Simple search filter
  const filteredData = assetData.filter((row) =>
    Object.values(row)
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-black text-white text-center py-3 rounded-lg mb-6">
        <h2 className="text-xl font-semibold">Asset List</h2>
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        {/* Search */}
        <div className="flex items-center bg-white px-3 py-2 rounded-lg shadow-sm w-64">
          <SearchIcon className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 outline-none"
          />
        </div>

        {/* Actions Menu */}
        <button className="flex items-center bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50">
          <MoreVertIcon className="text-gray-600" />
          <span className="ml-2">Actions</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-200 text-gray-900">
            <tr>
              <th className="px-4 py-2">Select</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Quantity (SI)</th>
              <th className="px-4 py-2">Value Per Unit (Rs)</th>
              <th className="px-4 py-2">Value In Asset (Rs)</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr
                  key={row.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">
                    <input
                      type="checkbox"
                      checked={selected.includes(row.id)}
                      onChange={() => toggleSelect(row.id)}
                    />
                  </td>
                  <td className="px-4 py-2 font-medium">{row.assetName}</td>
                  <td className="px-4 py-2">{row.assetType}</td>
                  <td className="px-4 py-2">{row.assetStatus}</td>
                  <td className="px-4 py-2">{row.totalQuantity}</td>
                  <td className="px-4 py-2">{row.valuePerUnit}</td>
                  <td className="px-4 py-2">{row.assetTotalValue}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-4 text-center text-gray-500">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="mt-4 text-sm text-gray-600">
        Showing {filteredData.length} of {assetData.length} assets
      </div>
    </div>
  );
};
