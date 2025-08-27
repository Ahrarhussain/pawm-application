import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AssetDetailsPage } from "./AssetDetailsPage.jsx";
import { AssetListPage } from "./AssetListPage.jsx";
import { RePieChart } from "./RePieChart.jsx";
import { AssetListTable } from "./AssetListTable.jsx";
import { HeaderApp } from "./HeaderApp.jsx";
import homepageBackground from "../images/homepageBackground.png";
import { AssetDataService } from "../services/asset.services.js";
import { PlusCircle } from "lucide-react";

const instanceValue = new AssetDataService();

export function HomePage() {
  const [assetData, setAssetData] = useState([]);

  useEffect(() => {
    const getAssets = async () => {
      const dataIs = await instanceValue.getAllAssets();
      setAssetData(dataIs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAssets();
  }, []);

  const navigate = useNavigate();

  const navigateToAssetDetails = () => {
    navigate("/AssetDetails");
  };
  const navigateToAssetListPage = () => {
    navigate("/AssetListPage");
  };

  let headerProp = "Home Page";

  return (
    <div
      className="flex flex-col w-full min-h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${homepageBackground})`,
        backgroundColor: "#FEDB74",
      }}
    >
      <HeaderApp headerProp={headerProp} />

      {/* Chart + Add Asset */}
      <div className="flex flex-row flex-wrap justify-center">
        {/* Chart Section */}
        <div className="m-4 p-6 rounded-2xl w-full md:w-[960px] bg-white shadow-lg flex items-center justify-center">
          <RePieChart assetData={assetData} />
        </div>

        {/* Add Asset Button */}
        <div className="flex flex-col p-6 m-4 mt-[100px] rounded-2xl bg-white shadow-lg">
          <button
            onClick={navigateToAssetDetails}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            <PlusCircle className="w-5 h-5" />
            Add Asset
          </button>
          <Routes>
            <Route path="/AssetDetails" element={<AssetDetailsPage />} />
          </Routes>
        </div>
      </div>

      {/* Asset List Table */}
      <div className="m-4 p-6 rounded-2xl bg-white shadow-lg">
        <AssetListTable assetData={assetData} />
      </div>

      {/* Asset Analytics Section */}
      <div className="m-4 mb-16 mx-8">
        <button
          onClick={navigateToAssetListPage}
          className="px-6 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition"
        >
          Asset Card and Analytics
        </button>
        <Routes>
          <Route path="/AssetListPage" element={<AssetListPage />} />
        </Routes>
      </div>
    </div>
  );
}
