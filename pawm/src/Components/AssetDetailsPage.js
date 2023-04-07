import React from "react";
import { useState } from "react";
import {Box, TextInput, Form, FormField, Button} from "grommet"

// const [value, setValue] = React.useState({});
// const [assetName, setAssetName]= useState();
// const [totalAssetValue, setTotalAssetValue]=useState();
// const [assetValuePerUnit, setAssetValuePerUnit]= useState();
// const [assetType, setAssetType]=useState();
// const [completed, setCompleted]= useState(false);
// const [timeCreated, setTimeCreated]=useState("00:00");


export function AssetDetailsPage(){
    const jsonDataArray=[];
    return(
        //Get Input from user
        <Form>
            <FormField Name="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField Total value="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField Units="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField Value of="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField Each Unit="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField Type of Asset="name" htmlFor="text-input-id" label="Name">
                <TextInput id="text-input-id" name="name" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
            </Box>
        </Form>
        

        //Push inputs into array


        //call addAssets function {addAssets jsonDataArray}
        
    );
}
