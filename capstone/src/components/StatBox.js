//file: src/components/StatBox.js

import React from "react";
import * as mui from '@mui/material';

var red= 8, blue= 10, white= 3;
export {red, blue, white};

var completed = 18, inQ = 3;

const StatBox = () => {
    const [time, setTime] = React.useState(24);

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

    return(
        <div>
        <mui.Box sx={{ maxWidth: 110}}> 
        <mui.FormControl fullWidth>
            <mui.InputLabel>Time Frame</mui.InputLabel>
            <mui.Select
            
            value={time}
            label="Time Frame"
            onChange={handleChange}
            >
            <mui.MenuItem value={24}>1 Day</mui.MenuItem>
            <mui.MenuItem value={72}>3 Days</mui.MenuItem>
            <mui.MenuItem value={168}>7 Days</mui.MenuItem>
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
       </div>
    )
}

export default StatBox;