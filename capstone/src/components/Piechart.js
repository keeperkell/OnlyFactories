// file: src/webpages/management.js

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Box from '@mui/material/Box'

class Piechart extends React.Component {
    colors = ['red', 'blue', 'grey'];

    data = [
        {
            "name": "Red",
            "value": 8
        },
        {
            "name": "Blue",
            "value": 10
        },
        {
            "name": "White",
            "value": 6
        }
    ];

    CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip" style={{ padding: '5px', backgroundColor: '#ffff', border: '1px solid #cccc' }}>
                    <label>{`${payload[0].name} : ${payload[0].value}`}</label>
                </div>
            );
        }

        return null;
    };

    render() {
        return (
            <Box sx={{border:3, borderRadius:16, p:1, m:1}}>
            <PieChart width={830} height={540}>
                <Pie data={this.data} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={200} radius="3px solid">
                    {
                        this.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.colors[index % this.colors.length]} />)
                    }
                </Pie>
                <Tooltip content={<this.CustomTooltip />} />
                <Legend />
            </PieChart>
            </Box>
        )
    };
};

export default Piechart;