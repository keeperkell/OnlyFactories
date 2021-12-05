//file: src/components/StatBox.js

import React from "react";
import * as mui from '@mui/material';

const StatBox = () => {
    const [time, setTime] = React.useState(24);

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    function createData(name, num) {
        return { name, num};
      }

    const rows=[
        createData('Orders Completed', 10),
        createData('Orders in Queue', 2)
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

        <mui.Box sx={{border:2, borderRadius: 16, p:1, m:1, textAlign:'center'}}>
            <p style={{color:'red', fontSize:'32px'}}>8</p>
        </mui.Box>
        <mui.Box sx={{border:2, borderRadius: 16, p:1, m:1, textAlign:'center'}}>
            <p style={{color:'blue', fontSize:'32px'}}>10</p>
        </mui.Box>
        <mui.Box sx={{border:2, borderRadius: 16, p:1, m:1, textAlign:'center'}}>
            <p style={{color:'grey', fontSize:'32px'}}>6</p>
        </mui.Box>
        <mui.Box sx={{border:2, borderRadius: 16, p:1, m:1, textAlign:'center'}}>
            <p style={{color:'black', fontSize:'32px'}}>Total: 24</p>
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