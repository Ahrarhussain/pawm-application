import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {
  Box,
  Button,
  List,
  Header,
  Menu,
  PageHeader,
  ResponsiveContext,
  Text,
} from 'grommet';
import {AssetListPage} from './AssetListPage';
import { Monitor, More, User, System} from 'grommet-icons';

const Data = [
  {
    assetName: 'Crypto',
    totalValue: '$899',
    icon: color => <Monitor color={color} />,
  },
  {
    assetName: 'Adhani',
    totalValue: '$1129',
    icon: color => <User color={color} />,
  },
  {
    assetName: 'Gold',
    totalValue: '$6793',
    icon: color => <System color={color} />,
  },
];

export function AssetList () {
    {Data.map((item) => {
        return(
            <Box 
                direction="column" 
                align="right"
            >

                <Text>{item.assetName}</Text>
                <Text>{item.totalValue}</Text>
            </Box>
            
        );
    })}
}