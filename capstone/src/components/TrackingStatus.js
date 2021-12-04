import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { orderData } from "../components/TrackingBox";

const Status = styled.div`
    height: 250px;
    width: 500px;
    background: #F1B300;

    color: #FFFFFF;   
`
/* This section went between the <Status> tags        
<button onClick={() => setDisplay(displayData + 1)}> Show </button>
        <p> Your Order </p>
        <p>{JSON.stringify(orderData, null, 2)}</p> */

const TrackingStatus = () => {

    const[orderData, setData] = useState("");


    return(
        <Status>
        <p>Place Holder Tracking Status</p>
        <form method='post'action='http://localhost:3306'>
            <div className='name'>
              <label htmlFor='orderID'>Enter Order Number:</label>
              <input type='text' name='orderID'  />
            </div>
            <div className='submit'>
              <input type='submit'/>
            </div>            
        </form>               

        
        </Status>
    )
}

export default TrackingStatus