import React from 'react';
import { Grommet } from 'grommet';
import {Meter} from 'grommet';

export const PieGrommet = ({assetData}) => {
    let totalValue=0;
    let valueArray= [];
    let labelArray= [];
    //we need to calculate totalValue of all assets so we can have percentage of each asset,
    //that we will put into value Array.
    assetData.map((item)=> {
        totalValue+=parseInt(item.assetTotalValue);
    })
    console.log(totalValue);

    assetData.map((item)=> {
        let x1= ((item.assetTotalValue)/totalValue)*100;
        x1=x1.toFixed(3);
        valueArray.push(x1);
        labelArray.push(item.assetName);
    })
    console.log(valueArray);
    console.log(labelArray);
    return(
        <Meter
            type="pie"
            values={[{
                value: valueArray[0],
                label: labelArray[0],
                backgroundColor: "green",
                onClick: () => {}
            }]}
            aria-label="meter"
        />
    );
}