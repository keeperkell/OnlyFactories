//file: src/components/StatBox.js

import React, {useEffect, useState} from "react";
import * as mui from '@mui/material';
import {Link} from 'react-router-dom';

var completed = 18, inQ = 3;
var red, blue, white;

const StatBox = () => {
    const [time, setTime] = useState(1);
    const [jData, setData] = useState([]);    

    const getQuantities = async () => {
        //local
        const response = await fetch(`http://localhost:3306/api/orderQuantities/` + time);
        //server
        //const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/orderQuantities/` + time);

        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);

    }

    const handleChange = (event) => {
        setTime(event.target.value);        
    };

    function createData(name, num) {
        return { name, num};
      }

    const rows=[
        createData('Orders Completed', completed),
        createData('Orders in Queue', inQ)
    ];

    {jData.map((jData, index) => (
        <l key={index}> 
        {red = jData.numRed,
        blue = jData.numBlue,
        white = jData.numWhite}
        </l>
    ))} 

    if(red == null) red = 0
    if(blue == null) blue = 0
    if(white == null) white = 0
    //getQuantities();

    return(
        
        <div>
        <mui.Box sx={{ maxWidth: 110}} className='sb'> 
        <mui.FormControl fullWidth>
            <mui.InputLabel>Time Frame</mui.InputLabel>
            <mui.Select
            value={time}
            label="Time Frame"
            onChange={handleChange}
            >
            <mui.MenuItem value={1} onClick={getQuantities}>1 Day</mui.MenuItem>
            <mui.MenuItem value={3} onClick={getQuantities}>3 Days</mui.MenuItem>
            <mui.MenuItem value={7} onClick={getQuantities}>7 Days</mui.MenuItem>
            </mui.Select>
        </mui.FormControl>
        </mui.Box>

        <mui.Box sx={{border:2, borderRadius: 6, p:1, m:1, textAlign:'center'}}>
            <h1 style={{color:'red', fontSize:'32px'}}>{red}</h1>
        </mui.Box>
        <mui.Box sx={{border:2, borderRadius: 6, p:1, m:1, textAlign:'center'}}>
            <h1 style={{color:'blue', fontSize:'32px'}}>{blue}</h1>
        </mui.Box>
        <mui.Box sx={{border:2, borderRadius: 6, p:1, m:1, textAlign:'center'}}>
            <h1 style={{color:'grey', fontSize:'32px'}}>{white}</h1>
        </mui.Box>
        <mui.Box sx={{border:2, borderRadius: 6, p:1, m:1, textAlign:'center'}}>
            <h1 style={{color:'black', fontSize:'32px'}}>Total: {red+blue+white}</h1>
        </mui.Box>

        <mui.TableContainer style={{border:'2px solid', borderRadius:16}}>
        <mui.TableBody>
          {rows.map((row) => (
            <mui.TableRow>
              <mui.TableCell align="right">{row.name}</mui.TableCell>
              <mui.TableCell align="right">{row.num}</mui.TableCell>
            </mui.TableRow>
          ))}
        </mui.TableBody>
        </mui.TableContainer>
        <p />

        <mui.FormControl sx={{m: 2, minWidth: 210}}>
            <mui.Button component={Link}
                to="/profit"
                variant="contained">
                    Profit
            </mui.Button>
        </mui.FormControl>
       </div>
    )
}


export default StatBox;
export {red, blue, white};