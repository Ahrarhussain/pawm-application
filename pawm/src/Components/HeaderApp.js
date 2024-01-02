import React from "react";
import {Box,Page, Text, Header, Button, Image,Menu} from "grommet";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {User, AddCircle, PieChart, Home} from "grommet-icons";
import { auth, db, logout } from "../firebase.config";   //for adding logout functionality

export function HeaderApp (prop){
    const headerValue = prop.headerProp;
    return(
        <Box direction="row" pad={{top:"small"}} elevation="large" margin="small" round="small" background="black"> 
            <Header  sticky="scrollup" round="small">
                <Box pad="small" margin="small" round="small" elevation="small">
                <Button
                    align="right"
                    //alignSelf="end"
                    size="small"
                    round="large"
                    a11yTitle={`User`}
                    icon={<User />}
                    color="black"
                    //onClick= {navigateToAssetDetails}
                    hoverIndicator={{color:"#6FFFB0"}}

                />
                </Box>
                <Button icon={<Home />} hoverIndicator />
                <Menu label="account" items={[{ label: 'logout'}]} />
                
                <Box align="center" width="large" pad={{left:"small", top:"medium", bottom:"medium"}}>
                    <Text weight="bold" size="xxlarge" color="white">{headerValue}</Text>
                </Box>
            </Header>

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
    );
} 