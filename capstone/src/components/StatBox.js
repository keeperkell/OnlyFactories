//file: src/components/StatBox.js

import React, { useEffect, useState } from "react";
import * as mui from '@mui/material';
import {Link} from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';

const sendInventoryReset = async() => {

    var payload = {
        "msg_type": "reset_inventory"
    }
    const response = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/sendInventoryRefresh`);

    console.log(response);
}

var completed = 0, inQ = 0, totalOrders = 0;
var red = 0, blue = 0, white = 0; 

const StatBox = () => {
    const [time, setTime] = useState(1)
    const [jData, setData] = useState([])

    //query timer
    useEffect(()=>{
        const timer = setTimeout(() =>{
            getQuantities();
        }, 100);
    });   

    //fetch data
    const getQuantities = async () => {
        //local
        //const response = await fetch(`http://localhost:3306/api/orderQuantities/` + time);
        //server
        const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/orderQuantities/` + time);

        const jsonData = await response.json();
        //console.log(jsonData);
        setData(jsonData);
        //alert(JSON.stringify(jsonData))
    }

    //dropdown menu
    const handleChange = (event) => {
        setTime(event.target.value);
    };
    
    //mapping JSON data
    jData.map((jData, index) => (
        <l key={index}> {[red = jData.numRed,
            blue = jData.numBlue,
            white = jData.numWhite,
            inQ = jData.inQue,
            completed = jData.completed,
            totalOrders = jData.totalOrders]}
        </l>
    ))

    //bottom box
    function createData(name, num) {
        return { name, num};
    }

    if(completed == null && inQ == null){completed = 0; inQ = 0}
    const rows=[
        createData('Orders Completed', completed),
        createData('Orders in Queue', inQ),
        createData('Total Orders', totalOrders)
    ];

    //pie chart
    var colors = ['red', 'blue', 'grey'];
    var data = [
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

    var total = red+blue+white
    if(total == 0){
        total = 1 
        red = 0 
        blue = 0 
        white = 0
    }

    //pie chart percent labels
    const RADIAN = Math.PI / 180;
    const customLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        if(percent > 0){
            return (
                <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                    {`${(percent * 100).toFixed(0)}%`}
                </text>
            );
        }
    };

    return(
    <div>
        <mui.Box sx={{p:1, m:1, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)", border:2, borderRadius:6, display:"inline-block"}}>
            <h2 style={{textAlign:"center"}}>Product Sold by Color</h2>

            <PieChart width={830} height={540} className='pc1' Key={data.value}>
                <Pie data={data} color="#000000" Key={data.value} dataKey={data.value} nameKey="name" cx="50%" cy="50%" outerRadius={200} 
                    isAnimationActive={false} labelLine={false} label={customLabel}>
                    {
                        data.map((entry, index) => <Cell fill={colors[index % colors.length]} />)
                    
                    }
                </Pie>
            </PieChart>

            <PieChart width={300} height={440} className='pc2' Key={data.value}>
                <Pie data={data} color="#000000" Key={data.value} dataKey={data.value} nameKey="name" cx="50%" cy="50%" outerRadius={150}>
                    {
                        data.map((entry, index) => <Cell fill={colors[index % colors.length]} />)
                    }
                    </Pie>
            </PieChart>
        </mui.Box>
        
        <mui.Box display="inline-block">
            <mui.Box sx={{ maxWidth: 110, paddingLeft:15.4}} className='sb' alignItems="right"> 
                <mui.FormControl fullWidth>
                    <mui.InputLabel>Time Frame</mui.InputLabel>
                        <mui.Select
                            value={time}
                            label="Time Frame"
                            onChange={handleChange}
                            sx={{boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.25)"}}
                        >
                        <mui.MenuItem value={1}>1 Day</mui.MenuItem>
                        <mui.MenuItem value={3}>3 Days</mui.MenuItem>
                        <mui.MenuItem value={7}>7 Days</mui.MenuItem>
                        </mui.Select>
                </mui.FormControl>
            </mui.Box>

            <mui.Box sx={{border:2, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)", borderRadius: 6, p:1, m:1, textAlign:'center', maxWidth:205}}>
                <h1 style={{color:'red', fontSize:'27px'}}>{red}</h1>
            </mui.Box>

            <mui.Box sx={{border:2, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)", borderRadius: 6, p:1, m:1, textAlign:'center', maxWidth:205}}>
                <h1 style={{color:'blue', fontSize:'27px'}}>{blue}</h1>
            </mui.Box>

            <mui.Box sx={{border:2, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)", borderRadius: 6, p:1, m:1, textAlign:'center', maxWidth:205}}>
                <h1 style={{color:'grey', fontSize:'27px'}}>{white}</h1>
            </mui.Box>

            <mui.Box sx={{border:2, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)", borderRadius: 6, p:1, m:1, textAlign:'center', maxWidth:205}}>
                <h1 style={{color:'black', fontSize:'27px'}}>Total: {red+blue+white}</h1>
            </mui.Box>

            <mui.TableContainer sx={{border:2, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)", borderRadius:6, p:1, m:1, textAlign:'center', maxWidth:205}}>
                <mui.Table>
                    {rows.map((row) => (
                        <mui.TableRow>
                            <mui.TableCell align="right">{row.name}</mui.TableCell>
                            <mui.TableCell align="right">{row.num}</mui.TableCell>
                        </mui.TableRow>
                    ))}
                </mui.Table>
            </mui.TableContainer>

            <p />

            <mui.FormControl sx={{m: 2, minWidth: 210}}>
                <mui.Button component={Link}
                    to="/profit"
                    variant="contained"
                    style={{backgroundColor: "#EAAB00", WebkitTextFillColor:"black"}}>
                        Profit
                </mui.Button>
                <br />
                <mui.Button 
                    variant="contained"
                    onClick = {() => {
                        sendInventoryReset();
                        console.log("reset sent");
                    }}
                    style={{backgroundColor: "#EAAB00", WebkitTextFillColor:"black"}}>
                        Reset Inventory
                </mui.Button>
            </mui.FormControl>
        </mui.Box>
    </div>
    )
}

export default StatBox;