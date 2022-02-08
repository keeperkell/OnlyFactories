// file: src/webpages/LineC.js

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend /*, ResponsiveContainer */} from 'recharts';
import { Box, FormControl, Button} from '@mui/material';
import {Link} from 'react-router-dom';


class LineC extends PureComponent {
  data = [
    {
      name: '1/26',
      Profit: 200,
    },
    {
      name: '1/27',
      Profit: 221,
    },
    {
      name: '1/28',
      Profit: 182,
    },
    {
      name: '1/29',
      Profit: 140,
    },
    {
      name: '1/30',
      Profit: 231,
    },
    {
      name: '1/31',
      Profit: 344,
    },
    {
      name: '2/1',
      Profit: 205,
    }
  ];

  render() {
      return (
      <div>
        <Box sx={{border:3, borderRadius:16, p:1, m:1}}>
          <h2 style={{textAlign:"center"}}>Profit per Day</h2>
          <h2 style={{textAlign:"center"}}>(Contribution Margin)</h2>
          <LineChart
            className='lc1'
            width={1000}
            height={500}
            data={this.data}
            margin={{top: 5, right: 30, left: 20,bottom: 5,}}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Profit" stroke="#EAAB00" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>

          <LineChart
            className='lc2'
            width={320}
            height={400}
            data={this.data}
            margin={{top: 5, right: 30, left: 20,bottom: 5,}}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Profit" stroke="#EAAB00" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>
        </Box>
        
        <FormControl sx={{m: 2, minWidth: 210}}>
        <Button component={Link}
            to="/management"
            variant="contained">
              Back
        </Button>
        </FormControl>
      </div>
        );
      }
};

export default LineC;