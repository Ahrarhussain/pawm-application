import React, {useState, useEffect} from "react";
import {Box, Button} from "grommet";
import {AddCircle} from "grommet-icons";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {AssetDetailsPage} from './AssetDetailsPage';
import {AssetListPage} from './AssetListPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RePieChart } from "./RePieChart";
import {AssetListTable} from "./AssetListTable";
import {HeaderApp} from "./HeaderApp.js";
import {homepageBackground} from "../Images/homepageBackground.png";

import {AssetDataService} from "../Services/asset.services.js";


const instanceValue= new AssetDataService();

export function HomePage() {
    const [assetData, setAssetData] = useState([]);

    useEffect(() => {
        const getAssets = async () => {
        const dataIs = await instanceValue.getAllAssets();
        setAssetData(dataIs.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        };

        getAssets();
    }, []);

    const navigate = useNavigate();

    const navigateToAssetDetails = () => {
        // 👇️ navigate to /AssetDetails
        navigate('/AssetDetails');
    };
    const navigateToAssetListPage = () => {
        // 👇️ navigate to /AssetDetails
        navigate('/AssetListPage');
    };
    // const navigateHome = () => {
    //     // 👇️ navigate to /
    //     navigate('/');
    //   };
    let headerProp = 'Home Page';

    return(
            <Box 
            
            direction="column" 
            background="#FEDB74" 
            scroll="overflow" 
            style = {{
                width:"100%",
                height: "auto",
                background:{homepageBackground},
                backgroundSize:"contain",
                backgroundRepeat:"no-repeat",
                //opacity:"0.6",
            }}
            >
            {<HeaderApp headerProp={headerProp}/> }
            <Box direction="row" >
                <Box 
                    margin="small" 
                    //background="white" 
                    round="small" 
                    // size="medium" 
                    padding="small"
                    width="960px"
                    contain
                    align="cneter"
                >
                    <RePieChart assetData={assetData}/>
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
            <Box margin="small" pad="small" round="small" background="">
                <AssetListTable assetData={assetData}/>
            </Box>
            <Box margin={{top:"small", bottom:"large", left:"medium", right:"medium"}}>
                <Button
                    label="Asset Card and Analytics"
                    onClick = {navigateToAssetListPage}
                    primary
                />
                <Routes>
                    <Route path="/AssetListPage" element={<AssetListPage />} />
                </Routes>
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

