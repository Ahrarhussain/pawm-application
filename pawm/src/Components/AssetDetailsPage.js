import React, { Component } from 'react';
import grommet from "grommet";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {HeaderApp} from "./HeaderApp.js"
import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  List,
  Header,
  Menu,
  PageHeader,
  ResponsiveContext,
  Text,
} from 'grommet';

export function AssetDetailsPage(){
    const [value,setValue] = React.useState({});
    const headerProp = "Asset Details Page";
    return(
        <Box 
            direction="column" 
            background="#FEDB74" 
            scroll="overflow" 
        >
            {<HeaderApp headerProp={headerProp} />}
            <Box 
                margin="large"
                background="black"
                align="justify"
                round="medium"
                pad="small"
                >
                <Form
                    value={value}
                    onChange={nextValue => setValue(nextValue)}
                    onReset={() => setValue({})}
                    onSubmit={({ value }) => {}}
                >
                    <FormField name="assetName" htmlFor="text-input-id" label="Asset Name">
                        <TextInput id="text-input-id" name="assetName" />
                    </FormField>
                    <FormField name="assetType" htmlFor="text-input-id" label="Type">
                        <TextInput id="text-input-id" name="assetType" />
                    </FormField>
                    <FormField name="assetStatus" htmlFor="text-input-id" label="Status">
                        <TextInput id="text-input-id" name="assetStatus" />
                    </FormField>
                    <FormField name="totalQuantity" htmlFor="text-input-id" label="Total Quantity">
                        <TextInput id="text-input-id" name="totalQuantity" />
                    </FormField>
                    <FormField name="valuePerUnit" htmlFor="text-input-id" label="Unit Value">
                        <TextInput id="text-input-id" name="valuePerUnit" />
                    </FormField>
                    <FormField name="assetTotalValue" htmlFor="text-input-id" label="Total Value">
                        <TextInput id="text-input-id" name="assetTotalValue" />
                    </FormField>
                    <Box direction="row" gap="medium">
                        <Button type="submit" primary label="Submit" />
                        <Button type="reset" label="Reset" />
                    </Box>
                </Form>
            </Box>
        </Box>
        
    );

}