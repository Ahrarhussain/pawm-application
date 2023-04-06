import React from "react";
import {Box,Page, Text, Header, Button} from "grommet";
import {User} from "grommet-icons";
import { Navigate } from "react-router-dom";

function HomePage() {
    return(
        <div>
        <Box
         fill>
            <Box
                direction="row"
                background="#CCCCCC"
                alignContent="right"
                height="xxsmall"
                >
                
                <Button><User color="black" align="center" round="small" size="large"/></Button>
            </Box>
            <Box
                direction="row-responsive"
                align="center">
                <Box background="grey">
                    <Text>PieChart</Text>
                </Box>
                <Box direction="column">
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