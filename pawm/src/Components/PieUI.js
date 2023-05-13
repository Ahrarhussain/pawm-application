import React, { Component } from 'react';
import {CanvasJSChart} from 'canvasjs-react-charts'
import grommet from "grommet"

export function PieUI () {
	const options = {
		theme: "dark2",
		animationEnabled: true,
		round:"small",
		data: [{
			type: "pie",
			legendText: "{label}",
			percentFormatString: "#0.##",
			toolTipContent: "{label}: Rs. {y}",
			indexLabel: "#percent%",
			indexLabelPlacement: "inside",
			outerRadius:"160px",
			innerRadius:"90px",
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