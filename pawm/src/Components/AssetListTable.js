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

const COLUMNS = [
  { property: 'assetName', header: 'Name', primary: true, pin: true },
  { property: 'assetType', header: 'Category' },
  { property: 'assetStatus', header: 'Status' },
  { property: 'totalQuantity', header: 'Quantity (SI)' },
  { property: 'valuePerUnit', header: 'Value Per Unit (Rs)'},
  { property: 'assetTotalValue', header: 'Value In Asset (Rs)' },
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

export const AssetListTable = ({assetData}) => (
  <Page background="background" fill round="small" pad="small" scroll="overflow">
    <PageContent>
      <Box gap="medium">
        <Header pad={{horizontal:"xsmall" }} justify="center" align="center" background="black" round="small">
          <Heading id="users-heading" level={3} margin="none">
            Asset List
          </Heading>
        </Header>
        <Results assetData11={assetData}/>
      </Box>
    </PageContent>
  </Page>
);

const Results = ({assetData11}) => {
  const [select, setSelect] = useState([]);
  const properties = buildProperties();
  
  return (
    <Data data={assetData11} flex properties={properties}>
      <Toolbar>
        {console.log(assetData11)}
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
