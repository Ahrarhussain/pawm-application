import React from "react";
import {Box,Page, Text, Header, Button} from "grommet";
import {User, PieChart} from "grommet-icons";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {AssetDetailsPage} from './AssetDetailsPage';


function HomePage() {
    const navigate = useNavigate();

    const navigateToAssetDetails = () => {
        // 👇️ navigate to /AssetDetails
        navigate('./AssetDetailsPage');
    };

    return(
        <Box direction="column">
            <Box align="center" pad={{top:"medium"}}>
                <Text weight="bold" size="xlarge">Home Page</Text>
            </Box>
            <Box pad={{top:"small"}} display="flex">
                <Box
                    direction="row"
                    background="#CCCCCC"
                    alignContent="right"
                    height="xxsmall"
                    justify="right"
                    
                >
                
                <Button
                    alignSelf="end"
                    size="small"
                    a11yTitle={`User`}
                    icon={<User />}
                    onClick= {navigateToAssetDetails}

                />

                <Routes>
                    <Route path="/AssetDetails" element={<AssetDetailsPage />} />
                </Routes>
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
        </Box>
        
       
        
        
    );
}

export default HomePage;