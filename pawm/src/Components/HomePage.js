import React from "react";
import {Box,Page, Text, Header, Button} from "grommet";
import {User, PieChart, Home} from "grommet-icons";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {AssetDetailsPage} from './AssetDetailsPage';


export function HomePage() {
    const navigate = useNavigate();

    const navigateToAssetDetails = () => {
        // 👇️ navigate to /AssetDetails
        navigate('./AssetDetailsPage');
    };
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };

    return(
        <Box direction="column">
            <Box align="center" pad={{top:"medium"}}>
                <Text weight="bold" size="xlarge">Home Page</Text>
            </Box>
            <Box direction="row" pad={{top:"small"}} background="grey">
                <Box pad="small" margin="small" round="small" background="white">
                        <Button
                            align="right"
                            //alignSelf="end"
                            size="small"
                            a11yTitle={`User`}
                            icon={<User />}
                            color="Black"
                            onClick= {navigateToAssetDetails}

                        />

                        <Routes>
                            <Route path="/AssetDetails" element={<AssetDetailsPage />} />
                        </Routes>
                </Box>
                <Box pad="small" margin="small">
                    <Text> user_name to be fetched </Text>
                </Box>

                {/* <Box align="right" pad="small">
                    <Button
                        align="right"
                        //alignSelf="end"
                        size="small"
                        a11yTitle={`Home`}
                        icon={<Home />}
                        color="Black"
                        onClick={navigateHome}

                    />
                </Box> */}
                
                
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
        
       
        
        
    );
}

