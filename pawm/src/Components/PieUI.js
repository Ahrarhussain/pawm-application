// import React from 'react';
// import { PieChart, Pie, Legend} from 'recharts';
// import '../Styles/PieUI.css';


// export function PieUI() {

//     // Sample data
//     // fetching dynamic data
//     // assetName: assets?.assetName
//     const data = [
//         {assetName: 'Reliance', totalAssetValue: 36000, fill: '#32EE00'},
//         {assetName: 'Adhani', totalAssetValue: 24000, fill: '#EAEE00'},
//         {assetName: 'Gold', totalAssetValue: 100000, fill: '#085C00'},
//         {assetName: 'Bitcoin', totalAssetValue: 50000, fill: '#EE6900'}
//     ];

//     return (
//             <div className='pieUI'>
//                 <PieChart width={500} height={500}>
//                     <Legend layout="vertical" verticalAlign="middle" align="right" />
//                     <Pie data={data} dataKey="totalAssetValue" outerRadius={250} />
//                 </PieChart>
//             </div>
//     );
// }

/* App.js */
import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'

export class PieUI extends Component {
	render() {
		const options = {
            theme: "dark2",
			animationEnabled: true,
			data: [{
				type: "pie",
				legendText: "{label}",
                percentFormatString: "#0.##",
			    toolTipContent: "{label}: Rs. {y}",
				indexLabel: "#percent%",
				indexLabelPlacement: "inside",
                showInLegend: true,
				dataPoints: [
					{ y: 36000, label: "Reliance", color: '#30D400'},
					{ y: 24000, label: "Adhani", color: '#D8DC00'},
					{ y: 100000, label: "Gold", color: '#167800'},
					{ y: 50000, label: "Bitcoin", color: '#D45D00'}
				]
			}]
		}
		return (
		<div className='pieUI'>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}