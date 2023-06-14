import React, {useState, useEffect} from "react";    //Write React outside the brackets, had an error for that.
import {HeaderApp} from "./HeaderApp";
import {Box,Text,Grid} from "grommet";
import { AssetCard } from "./AssetCard";
import {AssetDataService} from "../Services/asset.services.js";


const elementInstance= new AssetDataService();


export function AssetListPage(){
    const headerProp = "Asset List Page";
    const [assetData, setAssetData] = useState([]);
    

    useEffect(() => {
      const getAssets = async () => {
        const dataIs = await elementInstance.getAllAssets();
        setAssetData(dataIs.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
      };
  
      getAssets();
    }, []);

    console.log(assetData)
    let count=0;
    return (
        <Box
            direction="column" 
            background="#FEDB74" 
            scroll="overflow"   
        >
            {<HeaderApp headerProp={headerProp}/> }
            
            <Box justify="center" align="center" pad="medium" margin="medium">
                <Grid  rows={[]} columns={['medium', 'medium', 'medium']} gap="large">
                    {assetData && assetData.map((item) => {
                        count++;
                        return(<AssetCard name={item.assetName} status={item.assetStatus} totalValue={item.assetTotalValue} count={count}/>);    
                    })}
                </Grid>
            </Box>
    
        </Box>
    );
}

