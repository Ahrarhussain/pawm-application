import React from "react";
import {Box,Page, Text, Header, Button} from "grommet";
import {User, AddCircle, PieChart, Home} from "grommet-icons";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {AssetDetailsPage} from './AssetDetailsPage';
import { PieUI } from "./PieUI";
import {AssetList} from './AssetList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RePieChart } from "./RePieChart";
import {AssetListTable} from "./AssetListTable";

export function HomePage() {
    const navigate = useNavigate();

    const navigateToAssetDetails = () => {
        // 👇️ navigate to /AssetDetails
        navigate('/AssetDetails');
    };
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };

    return(
        
            <Box direction="column" background="#FEDB74" scroll="overflow">
            <Box align="center" pad={{top:"medium", bottom:"medium"}} elevation="large" >
                <Text weight="bold" size="xlarge" color="black">Home Page</Text>
            </Box>
            <Box direction="row" pad={{top:"small"}} elevation="large" margin="small" round="small" background="#FFFFFF">
                <Box pad="small" margin="small" round="small" background="black">
                        <Button
                            align="right"
                            //alignSelf="end"
                            size="small"
                            round="large"
                            a11yTitle={`User`}
                            icon={<User />}
                            color="Black"
                            //onClick= {navigateToAssetDetails}
                            hoverIndicator={{color:"#6FFFB0"}}

                        />

                        
                </Box>
                <Box pad="small" margin="small">
                    <Text> user_name </Text>
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
            <Box direction="row" >
                <Box 
                    margin="small" 
                    //background="white" 
                    round="small" 
                    // size="medium" 
                    padding="small"
                    width="960px"
                    contain
                >
                    <RePieChart />
                    {/* <PieUI /> */}
                </Box>
                <Box
                
                    direction="column"
                    //background="white"
                    fill={{vertical:true, horizontal:true}}                            
                    pad="small"
                    margin={{horizontal:"small",top:"150px"}}
                    //elevation="large"
                    round="medium">
                    <Button
                        align="center"
                        //alignSelf="end"
                        label="Add Asset"
                        a11yTitle={`User`}
                        icon={<AddCircle />}
                        // color="Black"
                        size="large"
                        onClick= {navigateToAssetDetails}
                        primary
                    />
                    <Routes>
                        <Route path="/AssetDetails" element={<AssetDetailsPage />} />
                    </Routes>
                        
                </Box>
                  
            </Box>
            <Box margin="xsmall" pad="xsmall" round="small" background="">
                <AssetListTable />
            </Box>
            { /* <div className="row">
                
                <div className="col-6">
                    <PieUI />
                </div>
                <div className="col-6">
                    <Box direction="column" align="right">
                        <Box size="medium"
                            background="white"
                            fill={{vertical:true, horizontal:true}}
                            direction="row"
                            pad="small"
                            margin="medium"
                            elevation="large"
                            round="medium">
                            <Button
                                align="right"
                                //alignSelf="end"
                                label="Add Asset"
                                a11yTitle={`User`}
                                icon={<AddCircle />}
                                color="Black"
                                size="large"
                                onClick= {navigateToAssetDetails}
                                hoverIndicator={{backgound:"blue"}}
                            />
                            <Routes>
                                <Route path="/AssetDetails" element={<AssetDetailsPage />} />
                            </Routes>
                        </Box>    
                        <Box size="medium" background="blue" scroll>
                            <AssetList />
                        </Box>
                    </Box>
                </div>
            </div> */}
            
        </Box>   
        
        
    );
}

