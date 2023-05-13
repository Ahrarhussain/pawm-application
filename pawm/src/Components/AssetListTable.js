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

const COLUMNS = [
  { property: 'nameOfAsset', header: 'Name', primary: true, pin: true },
  { property: 'categoryOfAsset', header: 'Category' },
  { property: 'statusOfAsset', header: 'Status' },
  { property: 'totalQuantity', header: 'Quantity' },
  { property: 'totalValueInAsset', header: 'Value In Asset', align: 'end' },
];

const allData = [
  {
    nameOfAsset: 'Real Estate',
    categoryOfAsset: 'Physical Asset',
    statusOfAsset: 'Stable',
    totalQuantity: '37 acres',
    totalValueInAsset: '47,000$',  
  },
  {
    nameOfAsset: 'Gold',
    categoryOfAsset: 'Physical Asset',
    statusOfAsset: 'Stable',
    totalQuantity: '5 kg',
    totalValueInAsset: '77,000$',  
  },
  {
    nameOfAsset: 'Adhani Power',
    categoryOfAsset: 'Shares',
    statusOfAsset: 'Towards Stability',
    totalQuantity: '900',
    totalValueInAsset: '8,000$',  
  },
  {
    nameOfAsset: 'Ambani Oil',
    categoryOfAsset: 'Shares',
    statusOfAsset: 'Good',
    totalQuantity: '1500',
    totalValueInAsset: '27,000$',  
  },
  {
    nameOfAsset: 'Bitcoin',
    categoryOfAsset: 'Crypto',
    statusOfAsset: 'Bad',
    totalQuantity: '100',
    totalValueInAsset: '1,700,000$',  
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
