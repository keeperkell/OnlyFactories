// file: src/webpages/Piechart.js

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Box from '@mui/material/Box';
import {red, blue, white} from './StatBox.js'

class Piechart extends React.Component {
    colors = ['red', 'blue', 'grey'];

    data = [
        {
            "name": "Red",
            "value": red
        },
        {
            "name": "Blue",
            "value": blue
        },
        {
            "name": "White",
            "value": white
        }
    ];

    
    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ padding: '5px', backgroundColor: '#ffff', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name}: ${((payload[0].value/(red+blue+white))*100).toFixed(2)}%`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (
            <Box sx={{border:3, borderRadius:16, p:1, m:1}}>
                <h2 style={{textAlign:"center"}}>Product Sold by Color</h2>
            <PieChart width={830} height={540}>
                <Pie data={this.data} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200}>
                    {
                        this.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.colors[index % this.colors.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                Legend
            </PieChart>
            </Box>
        )
    };
};

export default Piechart;