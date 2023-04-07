import React, { useEffect, useState } from "react";
import {Select,Box, TextInput, Form, FormField, Button} from "grommet"
import AssetDataService from '../Services/asset.services.js'

// const [value, setValue] = React.useState({});
//const [assetName, setAssetName]= React.useState();
// const [totalAssetValue, setTotalAssetValue]=useState();
// const [assetValuePerUnit, setAssetValuePerUnit]= useState();
// const [assetType, setAssetType]=useState();
// const [completed, setCompleted]= useState(false);
// const [timeCreated, setTimeCreated]=useState("00:00");


//const [value,setValue] = React.useState('select type');

// const [arrayData, setArrayData]= useState([])

export function AssetDetailsPage(){
    return(
        //Get Input from user
        <Box direction="column" size="small" margin="xlarge" border="15px solid black" round="medium" background="light-5">
            <Form
               //setArrayData={[assetName, totalAssetValue, assetValuePerUnit, assetType, completed, timeCreated ]}
            // onChange={nextValue => setValue(nextValue)}
               //onReset={() => setArrayData({})}
               //onSubmit={ console.log(arrayData)}
            >
                <FormField name="assetName" htmlFor="assetName" label="Asset Name">
                    <TextInput id="assetName" name="assetName" />
                    {}
                </FormField>
                <FormField name="totalAssetValue" htmlFor="totalAssetValue" label="Total Asset Value">
                    <TextInput id="totalAssetValue" name="totalAssetValue" />
                </FormField>
                <FormField name="assetValuePerUnit" htmlFor="assetValuePerUnit" label="Asset Value Per Unit">
                    <TextInput id="assetValuePerUnit" name="assetValuePerUnit" />
                </FormField>
                <FormField name="assetType" htmlFor="assetType" label="Asset Type">
                    {/* <TextInput id="text-input-id" name="name" /> */}
                    <Select 
                    border="small"
                    options={['Stock', 'Real Estate', 'Mutual Funds', 'Crypto', 'Gold']}
                    //value={value}
                    //onChange={({option}) => setValue(option)}
                    />
                </FormField>
                <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </Box>
        

        //Push inputs into array


        //call addAssets function {addAssets jsonDataArray}
        //[...jsonDataArray, completed, timestamp]
        
    );
}
