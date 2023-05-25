// TableCustomizationExample.js
import React, { useState } from 'react';
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

//Mock data import
//import {AllData} from "./AllData.js"


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
    totalQuantity: '37 acres',
    valuePerUnit: '123',
    assetTotalValue: '47,000$',  
  },
  {
    assetName: 'Gold',
    assetType: 'Physical Asset',
    assetStatus: 'Stable',
    totalQuantity: '5 kg',
    valuePerUnit: '123',
    assetTotalValue: '77,000$',  
  },
  {
    assetName: 'Adhani Power',
    assetType: 'Shares',
    assetStatus: 'Towards Stability',
    totalQuantity: '900',
    valuePerUnit: '123',
    assetTotalValue: '8,000$',  
  },
  {
    assetName: 'Ambani Oil',
    assetType: 'Shares',
    assetStatus: 'Good',
    totalQuantity: '1500',
    valuePerUnit: '123',
    assetTotalValue: '27,000$',  
  },
  {
    assetName: 'Bitcoin',
    assetType: 'Crypto',
    assetStatus: 'Bad',
    totalQuantity: '100',
    valuePerUnit: '123',
    assetTotalValue: '1,700,000$',  
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
  //const [allData, setAllData] = useState([AllData]);
  return (
    <Data data={allData} flex properties={properties}>
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
