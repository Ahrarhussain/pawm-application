import React from 'react';
import {Box, Card, CardHeader,CardFooter, CardBody, Button} from 'grommet';
import {Favorite, ShareOption, BarChart, FormTrash } from "grommet-icons";

export function AssetCard(prop) {
    const name = prop.name;
    const status = prop.status;
    const totalValue = prop.totalValue;
    const count=prop.count;
    //count=count % 4;
    return(
        <>
        {/* {(count == 0) ? ():()} */}
        <Card background="light-1" flex="grow">
            <CardHeader pad="medium">{name}</CardHeader>
            <CardBody pad="medium">
                Status : {status} <br />
                Total Value : {totalValue}
            </CardBody>
            <CardFooter pad={{horizontal: "small"}} background="light-2">
                <Button
                icon={<Favorite color="red" />}
                hoverIndicator
                />
                <Button icon={<BarChart color="plain" />} hoverIndicator />
                <Button icon={<ShareOption color="plain" />} hoverIndicator />
                <Button
                icon={<FormTrash color="red" />}
                hoverIndicator
                />
            </CardFooter>
        </Card>
        </>
        
    
        
    );
}



