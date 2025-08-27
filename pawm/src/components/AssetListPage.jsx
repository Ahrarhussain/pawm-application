import React, { useState, useEffect } from "react";
import { HeaderApp } from "./HeaderApp.jsx";
import { AssetCard } from "./AssetCard.jsx";
import { AssetDataService } from "../services/asset.services.js";

const elementInstance = new AssetDataService();

export function AssetListPage() {
  const headerProp = "Asset List Page";
  const [assetData, setAssetData] = useState([]);

  useEffect(() => {
    const getAssets = async () => {
      const dataIs = await elementInstance.getAllAssets();
      setAssetData(dataIs.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getAssets();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-yellow-300">
      <HeaderApp headerProp={headerProp} />

      <div className="flex justify-center items-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {assetData &&
            assetData.map((item, index) => (
              <AssetCard
                key={item.id}
                name={item.assetName}
                status={item.assetStatus}
                totalValue={item.assetTotalValue}
                count={index + 1}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
