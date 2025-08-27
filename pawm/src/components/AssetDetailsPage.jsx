import React from "react";
import { HeaderApp } from "./HeaderApp.jsx";
import { AssetDataService } from "../services/asset.services.js";

// MUI imports
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const instanceValue = new AssetDataService();

export function AssetDetailsPage() {
  const [value, setValue] = React.useState({});
  const [visible, setVisible] = React.useState(false);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  async function handleSubmit(value) {
    // Adding the asset from form to the fireStore Database.
    instanceValue.addAsset(value);

    // Toast Notification
    setVisible(true);

    await timeout(2000);

    // to refresh
    window.location.reload(false);
  }

  const headerProp = "Asset Details Page";

  return (
    <div className="bg-yellow-300 min-h-screen">
      <HeaderApp headerProp={headerProp} />

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md mt-10 bg-black rounded-lg p-6 text-white relative">
          {/* Toast Notification */}
          {visible && (
            <div className="absolute top-2 right-2 bg-white text-black border rounded-lg shadow-lg px-4 py-3 flex items-center gap-2">
              <CheckCircleIcon className="text-green-600" />
              <div>
                <p className="font-semibold">Asset Added!</p>
                <p className="text-sm">Form Submitted Successfully</p>
              </div>
              <button
                className="ml-2 text-gray-600 hover:text-gray-900"
                onClick={() => setVisible(false)}
              >
                ✕
              </button>
            </div>
          )}

          {/* Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(value);
            }}
            onReset={() => setValue({})}
          >
            {/* Asset Name */}
            <div>
              <label className="block mb-1 font-medium">Asset Name</label>
              <input
                type="text"
                name="assetName"
                placeholder="Type"
                value={value.assetName || ""}
                onChange={(e) =>
                  setValue({ ...value, assetName: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>

            {/* Type */}
            <div>
              <label className="block mb-1 font-medium">Type</label>
              <select
                name="assetType"
                value={value.assetType || ""}
                onChange={(e) =>
                  setValue({ ...value, assetType: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
              >
                <option value="">Select</option>
                <option>Physical Asset</option>
                <option>Shares</option>
                <option>Crypto</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 font-medium">Status</label>
              <select
                name="assetStatus"
                value={value.assetStatus || ""}
                onChange={(e) =>
                  setValue({ ...value, assetStatus: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
              >
                <option value="">Select</option>
                <option>Dark Green</option>
                <option>Yellow</option>
                <option>Red</option>
              </select>
            </div>

            {/* Total Quantity */}
            <div>
              <label className="block mb-1 font-medium">Total Quantity</label>
              <input
                type="number"
                name="totalQuantity"
                placeholder="00"
                value={value.totalQuantity || ""}
                onChange={(e) =>
                  setValue({ ...value, totalQuantity: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>

            {/* Unit Value */}
            <div>
              <label className="block mb-1 font-medium">Unit Value</label>
              <input
                type="number"
                name="valuePerUnit"
                placeholder="Rs.00"
                value={value.valuePerUnit || ""}
                onChange={(e) =>
                  setValue({ ...value, valuePerUnit: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>

            {/* Total Value */}
            <div>
              <label className="block mb-1 font-medium">Total Value</label>
              <input
                type="number"
                name="assetTotalValue"
                placeholder="Rs.00"
                value={value.assetTotalValue || ""}
                onChange={(e) =>
                  setValue({ ...value, assetTotalValue: e.target.value })
                }
                className="w-full px-3 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-medium"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg font-medium"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
