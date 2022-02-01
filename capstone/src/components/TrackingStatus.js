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


const TrackingStatus = props => {

   const [trackingData, setTrackingData] = useState([]);

    useEffect(()=>{
        const timer = setTimeout(() =>{
            getOrderTrackingData();
        }, 5000);
    }, [trackingData]);

    const getOrderTrackingData = async () => {

        //Keep the line below this for local host testing -- fetch order data
        //const response = await fetch(`http://localhost:3306/api/tracking/` + orderData);
        //Keep line below this for testing over live connection -- fetch order data
        const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/tracking/` + orderData);

        //put response into json format
        const jsonData = await response.json();

        //Set trackingData state to data received from database (orderData)
        setTrackingData(jsonData);

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