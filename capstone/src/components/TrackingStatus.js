import { selectInput } from "aws-amplify";
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

//const trackingURL = "http://localhost:3306/api/tracking" + orderData;

const TrackingStatus = props => {

   const [trackingData, setTrackingData] = useState([]);

    useEffect(()=>{
        const timer = setTimeout(() =>{
            getOrderTrackingData();
        }, 15000);
    }, trackingData);

    const getOrderTrackingData = async () => {
        const response = await fetch(`http://localhost:3306/api/tracking/` + orderData);
        const jsonData = await response.json();
        //alert(JSON.stringify(jsonData));
        setTrackingData(jsonData);
        //alert(JSON.stringify(trackingData));


    }


    return(
        <Status>

        <p>Place Holder Tracking Status</p> 
        {trackingData.map((trackingData) => (
            <li key={trackingData.orderID}>
                <p>
                    Order Number: {trackingData.orderID}
                </p>
                <p>
                    Order Status: {trackingData.orderStatus}
                </p>
            </li>
        ))}
        
        </Status>
    )
}

export default TrackingStatus