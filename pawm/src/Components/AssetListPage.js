import React from "react";
import AssetCard from "./AssetCard";
import {HeaderApp} from "./HeaderApp";
import {Box} from "grommet";

export function AssetListPage(){
    const headerProp = "Asset List Page";
    return(
        <Box 
            direction="column" 
            background="#FEDB74" 
            scroll="overflow"
        >
            {<HeaderApp headerProp={headerProp}/> }
            <h1>LIST OF ALL ASSETS</h1>
        </Box>
        // render multiple asset cards using map function
        // <AssetCard></AssetCard>
        
    );
}

