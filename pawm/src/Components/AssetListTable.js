// TableCustomizationExample.js
import React, { useState, useEffect } from 'react';
import {
  Box,
  Data,
  DataTable,
  DataFilters,
  DataSearch,
  DataSummary,
  DataTableColumns,
  Header,
  Heading,
  Menu,
  Page,
  PageContent,
  Toolbar,
} from 'grommet';
import {AssetDataService} from "../Services/asset.services.js";


const instanceValue= new AssetDataService();


const COLUMNS = [
  { property: 'assetName', header: 'Name', primary: true, pin: true },
  { property: 'assetType', header: 'Category' },
  { property: 'assetStatus', header: 'Status' },
  { property: 'totalQuantity', header: 'Quantity' },
  { property: 'valuePerUnit', header: 'Value Per Unit'},
  { property: 'assetTotalValue', header: 'Value In Asset', align: 'end' },
];


const allData = [
  {
    assetName: 'Real Estate',
    assetType: 'Physical Asset',
    assetStatus: 'Stable',
    totalQuantity: 37,
    valuePerUnit: 123,
    assetTotalValue: 47000,  
  },
  {
    assetName: 'Gold',
    assetType: 'Physical Asset',
    assetStatus: 'Stable',
    totalQuantity: 5,
    valuePerUnit: 123,
    assetTotalValue: 77000,  
  },
  {
    assetName: 'Adhani Power',
    assetType: 'Shares',
    assetStatus: 'Towards Stability',
    totalQuantity: 900,
    valuePerUnit: 123,
    assetTotalValue: 8000,  
  },
  {
    assetName: 'Ambani Oil',
    assetType: 'Shares',
    assetStatus: 'Good',
    totalQuantity: 1500,
    valuePerUnit: 123,
    assetTotalValue: 27000,  
  },
  {
    assetName: 'Bitcoin',
    assetType: 'Crypto',
    assetStatus: 'Bad',
    totalQuantity: 100,
    valuePerUnit: 123,
    assetTotalValue: 170000,  
  },
  
];

// Define data structure for DataTableColumns sorting
const options = COLUMNS.map(({ header, property }) => ({
  property,
  label: header,
}));

// Use options const to define data structure for Data component properties
const buildProperties = () => {
  const dict = {};
  for (let i = 0; i < options.length; i += 1) {
    const { label } = options[i];
    if (options[i].property === 'hoursAvailable') {
      dict[options[i].property] = {
        label,
        range: { min: 0, max: 40 },
      };
    } else {
      dict[options[i].property] = { label };
    }
  }
  return dict;
};

export const AssetListTable = () => (
  <Page background="background" fill round="small" pad="small" scroll="overflow">
    <PageContent>
      <Box gap="medium">
        <Header pad={{ top: 'medium',horizontal:"xsmall" }}>
          <Heading id="users-heading" level={2} margin="none">
            Asset List
          </Heading>
        </Header>
        <Results />
      </Box>
    </PageContent>
  </Page>
);

const Results = () => {
  const [select, setSelect] = useState([]);
  const properties = buildProperties();
  const [assetData, setAssetData] = useState([]);

  useEffect(() => {
    const getAssets = async () => {
      const dataIs = await instanceValue.getAllAssets();
      setAssetData(dataIs.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
    };

    getAssets();
  }, []);
  
  return (
    <Data data={assetData} flex properties={properties}>
      <Toolbar>
        <DataSearch responsive />
        <DataTableColumns drop options={options} />
        <DataFilters layer />
        {/* Flex box for spacing between Data components and Actions button  */}
        <Box flex />
        <Menu label="Actions" kind="toolbar" />
      </Toolbar>
      <DataSummary />
      <Box overflow="auto" flex>
        <DataTable
          aria-describedby="users-heading"
          background="background"
          columns={COLUMNS}
          select={select}
          onSelect={setSelect}
          pin
        />
      </Box>
    </Data>
  );
};
