import React, {useEffect, useState} from "react";
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


    return(
        <Status>

        <p>Place Holder Tracking Status</p> 
        {orderData}
        
        </Status>
    )
}

export default TrackingStatus