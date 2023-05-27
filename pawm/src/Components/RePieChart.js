import React from 'react';
import { PieChart, Pie} from 'recharts';
import grommet from "grommet";
  
  
export const RePieChart = () => {
  
// Sample data
const data = [
  {name: 'Geeksforgeeks', students: 400},
  {name: 'Technical scripter', students: 700},
  {name: 'Geek-i-knack', students: 200},
  {name: 'Geek-o-mania', students: 1000}
];
  
return (
        <PieChart width={350} height={350} margin="large">
          <Pie 
          data={data}
          animationsEnabled="true"
          dataKey="students" 
          outerRadius={160} 
          innerRadius={90} 
          margin={{left:"large"}}
          align="center"
          fill="green" />
          
        </PieChart>
);
}