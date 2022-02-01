import { selectInput } from "aws-amplify";
import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { orderData } from "../components/TrackingBox";

const Status = styled.div`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    color: #333333;   
`
const OrderNS = styled.div`
    height: 100px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 8px;
    padding: 10px 0px;
    color: #333333; 
`

const WebcamBox = styled.div`
    height: 400px;
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    color: #333333; 
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

        let testOrderID = jsonData.map((jsonData) => jsonData.orderID);
        let testOrderAsInt = parseInt(testOrderID, 10);
        testOrderAsInt += 1;
        console.log(testOrderAsInt);


    }

    return(

        <div>
        <Status>
            <h1>Tracking Status</h1> 
        </Status>
        <Status>
            {trackingData.map((trackingData, index) => (
                <div key={index}>
                    <OrderNS>
                    <h3>
                      Order Number: {trackingData.orderID}
                    </h3>
                    </OrderNS>
                    <WebcamBox><h1>Webcam Goes Here</h1></WebcamBox>
                    <OrderNS>
                    <h3>
                     Order Status: {trackingData.orderStatus}
                    </h3>
                    </OrderNS>
                </div>
            ))}       
        </Status>
        </div>
    )
}

export default TrackingStatus