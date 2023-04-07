import React from "react";
import {Box,Page, Text, Header, Button} from "grommet";
import {User, PieChart} from "grommet-icons";
import { Navigate } from "react-router-dom";

function HomePage() {
    return(
        <div>
        <Box pad={{top:"small"}} display="flex">
            <Box
                direction="row"
                background="#CCCCCC"
                alignContent="right"
                height="xxsmall"
                justify="right"
                
                >
                
                <Button><User color="black" align="center" round="small" size="large"/></Button>
            </Box>
            <Box
                direction="row"
                align="center">
                <Box size="large" align="left" margin={{right:"small"}}background="grey" flex="0.75">
                    <Text>PieChart</Text>
                </Box>
                <Box direction="column" flex="0.25">
                    <Box size="medium" background="green" fill={{vertical:true}}>
                        <Text>Asset top column field</Text>
                    </Box>
                    <Box size="medium" background="blue">
                        <Text>Asset List field</Text>
                    </Box>
                </Box>

            </Box>
        </Box>
        </div>
        
        
    );
}

export default HomePage;