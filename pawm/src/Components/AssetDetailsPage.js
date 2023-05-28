import React, { Component, useState } from 'react';
import {grommet, Notification} from "grommet";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {HeaderApp} from "./HeaderApp.js"
import {AssetDataService} from "../Services/asset.services.js";

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


const instanceValue= new AssetDataService();

function handleSubmit(value){
    //Adding the asset from form to the fireStore Database.
    instanceValue.addAsset(value);
    
}
export function AssetDetailsPage(){
    const [value,setValue] = React.useState({});
    const headerProp = "Asset Details Page";
    
    return(
        <Box 
            background="#FEDB74" 
            scroll="overflow"
        >
            {<HeaderApp headerProp={headerProp} />}
            <Box 
                align="center"
                justify="center"
            >
                <Box 
                    width="medium"
                    margin="large"
                    background="black"
                    round="medium"
                    pad="small"
                    
                    >
                    <Form
                        value={value}
                        onChange={nextValue => setValue(nextValue)}
                        onReset={() => setValue({})}
                        onSubmit={({ value }) => {handleSubmit(value)}}
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
                        <FormField name="totalQuantity" htmlFor="number-input-id" label="Total Quantity">
                            <TextInput id="number-input-id" name="totalQuantity" type="number"/>
                        </FormField>
                        <FormField name="valuePerUnit" htmlFor="number-input-id" label="Unit Value">
                            <TextInput id="number-input-id" name="valuePerUnit" type="number"/>
                        </FormField>
                        <FormField name="assetTotalValue" htmlFor="number-input-id" label="Total Value">
                            <TextInput id="number-input-id" name="assetTotalValue" type="number"/>
                        </FormField>
                        <Box direction="row" gap="medium">
                            <Button type="submit" primary label="Submit" />
                            <Button type="reset" label="Reset" />
                        </Box>
                    </Form>
                </Box>

            </Box>
            
        </Box>
        
    );

}