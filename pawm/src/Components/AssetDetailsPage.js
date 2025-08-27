import React from 'react';
import { Notification} from "grommet";
import { StatusGood} from 'grommet-icons';
import {HeaderApp} from "./HeaderApp.js"
import {AssetDataService} from "../Services/asset.services.js";

import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Select,
} from 'grommet';

const instanceValue= new AssetDataService();

export function AssetDetailsPage(){
    const [value,setValue] = React.useState({});
    const [visible, setVisible] = React.useState();

    function timeout(delay: Number) {
        return new Promise( res => setTimeout(res, delay) );
    }

    async function handleSubmit(value){
        //Adding the asset from form to the fireStore Database.
        instanceValue.addAsset(value);
    
        // //Toast Notification
        setVisible(true)

        await timeout(2000);
    
        //to refresh
        window.location.reload(false);
        
    }

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
                    {visible && (
                        <Notification
                        toast
                        size="medium"
                        icon={<StatusGood color="green" size="medium"/>}
                        background="white"
                        style={{color:"black"}}
                        title="Asset Added!"
                        message="Form Submitted Successfully"
                        onClose={() => setVisible(false)}
                        />
                    )}
                    <Form
                        value={value}
                        onChange={nextValue => setValue(nextValue)}
                        onReset={() => setValue({})}
                        onSubmit={({ value }) => {handleSubmit(value)}}
                    >
                        <FormField name="assetName" htmlFor="text-input-id" label="Asset Name">
                            <TextInput id="text-input-id" name="assetName" placeholder="Type"/>
                        </FormField>
                        
                        <FormField name="assetType" htmlFor="text-input-id" label="Type">
                            <Select
                                options={['Physical Asset', 'Shares', 'Crypto']}
                                name="assetType"
                                id="text-input-id"
                                placeholder="Select"
                            />
                            
                        </FormField>
                        <FormField name="assetStatus" htmlFor="text-input-id" label="Status">
                            <Select
                                options={['Dark Green', 'Yellow', 'Red']}
                                name="assetStatus"
                                id="text-input-id"
                                placeholder="Status order w.r.t asset order"
                            />
                            
                        </FormField>
                        <FormField name="totalQuantity" htmlFor="number-input-id" label="Total Quantity">
                            <TextInput id="number-input-id" name="totalQuantity" type="number" placeholder="00"/>
                        </FormField>
                        <FormField name="valuePerUnit" htmlFor="number-input-id" label="Unit Value">
                            <TextInput id="number-input-id" name="valuePerUnit" type="number" placeholder="Rs.00"/>
                        </FormField>
                        <FormField name="assetTotalValue" htmlFor="number-input-id" label="Total Value">
                            <TextInput id="number-input-id" name="assetTotalValue" type="number" placeholder="Rs.00"/>
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