// import React, { useEffect, useState } from "react";
// import {Select,Box, TextInput, Form, FormField, Button} from "grommet"
import AssetDataService from '../Services/asset.services.js'

// //const [value, setValue] = React.useState({});
// // const [assetName, setAssetName]= React.useState();
// // const [totalAssetValue, setTotalAssetValue]=useState();
// // const [assetValuePerUnit, setAssetValuePerUnit]= useState();
// // const [assetType, setAssetType]=useState();
// // const [completed, setCompleted]= useState(false);
// // const [timeCreated, setTimeCreated]=useState("00:00");


// // const [value,setValue] = React.useState('select type');

// // const [arrayData, setArrayData]= useState([])

// export function AssetDetailsPage(){
//     return(
        //Get Input from user
        // <Box direction="column" size="small" margin="xlarge" border="15px solid black" round="medium" background="light-5">
        //     <Form
        //     //     setArrayData={[assetName, totalAssetValue, assetValuePerUnit, assetType, completed, timeCreated ]}
        //     //     onChange={nextValue => setValue(nextValue)}
        //     //     onReset={() => setArrayData({})}
        //     //    onSubmit={ console.log(Form)}
        //     >
        //         <FormField name="assetName" htmlFor="assetName" label="Asset Name">
        //             <TextInput id="assetName" name="assetName" />
        //         </FormField>
        //         <FormField name="totalAssetValue" htmlFor="totalAssetValue" label="Total Asset Value">
        //             <TextInput id="totalAssetValue" name="totalAssetValue" />
        //         </FormField>
        //         <FormField name="assetValuePerUnit" htmlFor="assetValuePerUnit" label="Asset Value Per Unit">
        //             <TextInput id="assetValuePerUnit" name="assetValuePerUnit" />
        //         </FormField>
        //         <FormField name="assetType" htmlFor="assetType" label="Asset Type">
        //             {/* <TextInput id="text-input-id" name="name" /> */}
        //             <Select 
        //             border="small"
        //             options={['Stock', 'Real Estate', 'Mutual Funds', 'Crypto', 'Gold']}
        //             // value={value}
        //             // onChange={({option}) => setValue(option)}
        //             />
        //         </FormField>
        //         <Box direction="row" gap="medium">
        //             <Button type="submit" primary label="Submit" />
        //             <Button type="reset" label="Reset" />
        //         </Box>
        //     </Form>
        // </Box>


        //Using simple form method:

        

        //Push inputs into array


        //call addAssets function {addAssets jsonDataArray}
        //[...jsonDataArray, completed, timestamp]
        
//     );
// }



import React, { Component } from 'react';
import {Box} from 'grommet';

export class AssetDetailsPage extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeAssetName = this.onChangeAssetName.bind(this);
        this.onChangeTotalAssetValue = this.onChangeTotalAssetValue.bind(this);
        this.onChangeAssetValuePerUnit = this.onChangeAssetValuePerUnit.bind(this);
        this.onChangeAssetType = this.onChangeAssetType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            assetName: '',
            totalAssetValue: '',
            assetValuePerUnit: '',
            assetType: ''
            // completed: false,
            // created: Timestamp.now()
        }
    }
    // Form Events
    onChangeAssetName(e) {
        this.setState({ assetName: e.target.value })
    }
    onChangeTotalAssetValue(e) {
        this.setState({ totalAssetValue: e.target.value })
    }
    onChangeAssetValuePerUnit(e) {
        this.setState({ assetValuePerUnit: e.target.value })
    }
    onChangeAssetType(e) {
        this.setState({ assetType: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        this.setState({
            assetName: '',
            totalAssetValue: '',
            assetValuePerUnit: '',
            assetType: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                assetName: this.userData.assetName,
                totalAssetValue: this.userData.totalAssetValue,
                assetValuePerUnit: this.userData.assetValuePerUnit,
                assetType:this.userData.assetType
            })
        } else {
            this.setState({
                assetName: '',
                totalAssetValue: '',
                assetValuePerUnit: '',
                assetType: ''
            })
        }

        
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <>
            
            <Box direction='column' margin="medium" border="20px solid black" round="small" background="light-5">
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>AssetName</label>
                            <input type="text" className="form-control" value={this.state.assetName} onChange={this.onChangeAssetName} />
                        </div>
                        <div className="form-group">
                            <label>TotalAssetValue</label>
                            <input type="number" className="form-control" value={this.state.totalAssetValue} onChange={this.onChangeTotalAssetValue} />
                        </div>
                        <div className="form-group">
                            <label>AssetValuePerUnit</label>
                            <input type="number" className="form-control" value={this.state.assetValuePerUnit} onChange={this.onChangeAssetValuePerUnit} />
                        </div>
                        <div className="form-group">
                            <label>AssetType</label>
                            <input type="text" className="form-control" value={this.state.assetType} onChange={this.onChangeAssetType} />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>

            </Box>
           {/* <AssetDataService.addAsset(this.userData) /> */}
           </>
        )
    }
}