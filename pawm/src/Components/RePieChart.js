import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer} from 'recharts';
  
const COLORS= [
  "#00739D",
  "#FC5A5A",
  "#50C878",
]
export const RePieChart = ({assetData}) => {
 
let physicalData=0;
let shareData=0;
let cryptoData=0;
let totalData=0;
assetData.map((item)=> {
  let x = parseInt(item.assetTotalValue);
  totalData += x;
  if(item.assetType === "Shares"){
    shareData += x;
  }
  else if(item.assetType === "Crypto"){
    cryptoData += x;
  }
  else{
    physicalData +=x;
  }
})

console.log(totalData);
console.log(physicalData);
console.log(cryptoData);


// Sample data
const data = [
  {name: 'Physical Assets', students: physicalData},
  {name: 'Shares', students: shareData},
  {name: 'Crypto', students: cryptoData},
];

  
return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart  margin="large">
        <Tooltip/>
        <Legend />
        <Pie 
          data={data}
          cx="50%"
          cy="50%"
          isAnimationActive
          dataKey="students" 
          outerRadius={180} 
          innerRadius={100} 
          margin={{left:"large"}}
          align="center"
          label={true}
          fill="green">
          <Tooltip />
          {data.map((entry,index) => (
            <Cell 
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
   
);
}