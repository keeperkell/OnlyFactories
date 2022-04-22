// file: src/webpages/LineC.js

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend /*, ResponsiveContainer */} from 'recharts';
import { Box, FormControl, Button} from '@mui/material';
import {Link} from 'react-router-dom';

const LineC = () => {
  const [jData1, setData1] = useState([])
  const [jData2, setData2] = useState([])
  var redP = 0.0, blueP = 0.0, whiteP = 0.0;
  var red1 = 0, blue1 = 0, white1 = 0, red2 = 0, blue2 = 0, white2 = 0, red3 = 0, blue3 = 0, white3 = 0, red4 = 0, blue4 = 0, white4 = 0;
  var red5 = 0, blue5 = 0, white5 = 0, red6 = 0, blue6 = 0, white6 = 0, red7 = 0, blue7 = 0, white7 = 0;
  var currentDate = new Date();
  var day = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  //query timer
  useEffect(()=>{
        checkPrice();
        getDaysQ();
  },[]);

  //fetch prices
  const checkPrice = async () => {
    //local
    //const response1 = await fetch(`http://localhost:3306/api/checkPrice/`);
    //server
    const response1 = await fetch(`https://onlyfactories.duckdns.org:3306/api/checkPrice/`);

    const jsonData1 = await response1.json();
    console.log(jsonData1);
    setData1(jsonData1);
    //alert(JSON.stringify(jsonData1))
  }

  //fetch days
  const getDaysQ = async () => {
    //local
    //const response2 = await fetch(`http://localhost:3306/api/getDaysQ/` + day);
    //server
    const response2 = await fetch(`https://onlyfactories.duckdns.org:3306/api/getDaysQ/` + day);

    const jsonData2 = await response2.json();
    console.log(jsonData2);
    setData2(jsonData2);
    //alert(JSON.stringify(jsonData2))
  }

  //mapping JSON prices
  jData1.map((jData1, index) => (
    <l key={index}> {redP = jData1.redP,
      blueP = jData1.blueP,
      whiteP = jData1.whiteP 
    } </l>
  ))

  //mapping JSON quantities
  jData2.map((jData2, index) => (
    <l key={index}> {red1 = jData2.numRed1,
      blue1 = jData2.numBlue1,
      white1 = jData2.numWhite1, 
      red2 = jData2.numRed2,
      blue2 = jData2.numBlue2,
      white2 = jData2.numWhite2, 
      red3 = jData2.numRed3,
      blue3 = jData2.numBlue3,
      white3 = jData2.numWhite3, 
      red4 = jData2.numRed4,
      blue4 = jData2.numBlue4,
      white4 = jData2.numWhite4, 
      red5 = jData2.numRed5,
      blue5 = jData2.numBlue5,
      white5 = jData2.numWhite5, 
      red6 = jData2.numRed6,
      blue6 = jData2.numBlue6,
      white6 = jData2.numWhite6, 
      red7 = jData2.numRed7,
      blue7 = jData2.numBlue7,
      white7 = jData2.numWhite7
    } </l>
  ))

  if(red1 == null){ red1 = 0 }
  if(red2 == null){ red2 = 0 }
  if(red3 == null){ red3 = 0 }
  if(red4 == null){ red4 = 0 }
  if(red5 == null){ red5 = 0 }
  if(red6 == null){ red6 = 0 }
  if(red7 == null){ red7 = 0 }

  if(blue1 == null){ blue1 = 0 }
  if(blue2 == null){ blue2 = 0 }
  if(blue3 == null){ blue3 = 0 }
  if(blue4 == null){ blue4 = 0 }
  if(blue5 == null){ blue5 = 0 }
  if(blue6 == null){ blue6 = 0 }
  if(blue7 == null){ blue7 = 0 }

  if(white1 == null){ white1 = 0 }
  if(white2 == null){ white2 = 0 }
  if(white3 == null){ white3 = 0 }
  if(white4 == null){ white4 = 0 }
  if(white5 == null){ white5 = 0 }
  if(white6 == null){ white6 = 0 }
  if(white7 == null){ white7 = 0 }

  //Calculate profit
  var p1, p2, p3, p4, p5, p6, p7;
  p1 = ((red1 * redP) + (blue1 * blueP) + (white1 * whiteP)).toFixed(2);
  p2 = ((red2 * redP) + (blue2 * blueP) + (white2 * whiteP)).toFixed(2);
  p3 = ((red3 * redP) + (blue3 * blueP) + (white3 * whiteP)).toFixed(2);
  p4 = ((red4 * redP) + (blue4 * blueP) + (white4 * whiteP)).toFixed(2);
  p5 = ((red5 * redP) + (blue5 * blueP) + (white5 * whiteP)).toFixed(2);
  p6 = ((red6 * redP) + (blue6 * blueP) + (white6 * whiteP)).toFixed(2);
  p7 = ((red7 * redP) + (blue7 * blueP) + (white7 * whiteP)).toFixed(2);

  //get 7 days
  var day1 = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  currentDate.setDate(currentDate.getDate() - 1);
  var day2 = (currentDate.getMonth()+1) + '-' + currentDate.getDate();

  currentDate.setDate(currentDate.getDate() - 1);
  var day3 = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  currentDate.setDate(currentDate.getDate() - 1);
  var day4 = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  currentDate.setDate(currentDate.getDate() - 1);
  var day5 = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  currentDate.setDate(currentDate.getDate() - 1);
  var day6 = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  currentDate.setDate(currentDate.getDate() - 1);
  var day7 = (currentDate.getMonth()+1) + '-' + currentDate.getDate()

  //Create graph data
  const data = [
    {
      name: day7,
      Profit: p7,
    },
    {
      name: day6,
      Profit: p6,
    },
    {
      name: day5,
      Profit: p5,
    },
    {
      name: day4,
      Profit: p4,
    },
    {
      name: day3,
      Profit: p3,
    },
    {
      name: day2,
      Profit: p2,
    },
    {
      name: day1,
      Profit: p1,
    }
    ];

    //find y axis
    var maximum = 10 * Math.ceil( Math.max(p1,p2,p3,p4,p5,p6,p7) / 10)

    return (
      <div>
        <Box sx={{border:2, borderRadius:6, p:1, m:1, boxShadow:"0 0 15px 0 rgba(0, 0, 0, 0.25)"}}>
          <h2 style={{textAlign:"center"}}>Profit per Day</h2>
          <h2 style={{textAlign:"center"}}>(Contribution Margin)</h2>

          <LineChart
            className='lc1'
            width={1000}
            height={500}
            data={data}
            margin={{top: 5, right: 30, left: 20,bottom: 5,}}
            key = {data.profit}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" label={{value:"Date", position:"insideBottom", offset:-10}} />
          <YAxis key = {data.profit} domain={[0, maximum]} label={{value:"Dollars", angle:-90, position:"insideLeft", offset:-10}} />
          <Tooltip />
          <Legend align="left" wrapperStyle={{paddingTop:5, paddingLeft:40}} />
          <Line type="monotone" dataKey="Profit" key = {data.profit} stroke="#EAAB00" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>

          <LineChart
            className='lc2'
            width={320}
            height={400}
            data={data}
            margin={{top: 5, right: 30, left: 20,bottom: 5,}}
            key = {data.profit}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis key = {data.profit} domain={[0, maximum]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Profit" key = {data.profit} stroke="#EAAB00" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>
        </Box>
        
        <FormControl sx={{m: 2, minWidth: 210}}>
        <Button component={Link}
            to="/management"
            variant="contained"
            style={{backgroundColor: "#EAAB00", WebkitTextFillColor:"black"}}>
              Back
        </Button>
        </FormControl>
      </div>
    );
};

export default LineC;