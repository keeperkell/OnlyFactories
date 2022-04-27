//import { selectInput } from "aws-amplify";
import React, {useEffect, useState} from "react";
//import {Link} from 'react-router-dom';
import styled from "styled-components";
import { orderData } from "../components/TrackingBox";
import { orderBoxOrderData } from "../components/OrderBox";
import WebcamFrame from "./WebcamStream";

//import { json } from "express";

//import { useHistory } from "react-router-dom";

//orderID and orderStatus for display
// need 2 seperate init values so factoryOrderID and orderID do not accidently
// match and allow webcam access
var factoryOrderID = -2;
var orderID = -1;
var jobID = -3;
var orderStatus = "No order";

const Status = styled.div`
    width: 70em;
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
    width: 100%;
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    color: #333333; 
`

const checkOrigin = (orderData, orderBoxOrderData) =>{
    var currentURLID;

    if (orderBoxOrderData != null ){

        currentURLID = orderBoxOrderData;
        console.log(currentURLID);
        orderBoxOrderData = null;
        console.log(orderBoxOrderData);
        return currentURLID;
        
    }

    else if (orderData != null){
        currentURLID = orderData;
        orderData = null;
        console.log(orderData);
        return currentURLID;

    }
}

const TrackingStatus = props => {

   const [trackingData, setTrackingData] = useState([]);
   const [factoryID, setFactoryOrderID] = useState([]);
   const [orderURL, setURL] = useState(0);
   const [img, setImg] = useState();

   var urlID = checkOrigin(orderData, orderBoxOrderData);

    useEffect(()=>{
        const timer = setTimeout(() =>{
            getOrderTrackingData();
        }, 100);
    }, [trackingData]);

    useEffect(()=>{
        const timer = setTimeout(() =>{
            getOrderIDFromFactory();
        }, 100);
    }, [factoryID]);

    useEffect(()=>{
        getWebcamSource();
    }, [img])

    const getOrderIDFromFactory = async () => {
        //Keep the line below this for local host testing -- fetch order data
        //const response = await fetch(`http://localhost:3306/api/getFactoryOrderID/`);

        //Keep line below this for testing over live connection -- fetch order data
        const jobResponse = await fetch(`https://onlyfactories.duckdns.org:3306/api/getFactoryJobID/`);
        let tempJob = [await jobResponse.json()];
        {tempJob.map((tempJob) => (
            <l>
                {jobID = tempJob.current_job}
            </l>
        ))}
        
        console.log("Current Job: ", jobID);

        //Keep the line below this for local host testing -- fetch order data
        //const response = await fetch(`http://localhost:3306/api/getFactoryOrderID/`);

        //Keep line below this for testing over live connection -- fetch order data
        const orderResponse = await fetch(`https://onlyfactories.duckdns.org:3306/api/getFactoryOrderID/` + jobID);

       /* let tempOrder = [await orderResponse.json()];
        {tempOrder.map((tempOrder) => (
            <l>
                {factoryOrderID = tempOrder.orderID}
            </l>
        ))}*/

        
        //put response into json format
        const jsonData = await orderResponse.json();

        //const jOrderIDtoInt = parseInt(jsonData.orderID);

        setFactoryOrderID([jsonData]);
        
    }

    const getOrderTrackingData = async () => {

        //Keep the line below this for local host testing -- fetch order data
        //const response = await fetch(`http://localhost:3306/api/tracking/` + urlID);

        //Keep line below this for testing over live connection -- fetch order data
        const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/tracking/` + urlID);
        
        //put response into json format
        const jsonData = await response.json();

        //Set trackingData state to data received from database (orderData)
        setTrackingData([jsonData]);
    }

    const getWebcamSource = async () => {
        //const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/getWebcamFrame/`);
        //const source = await response.json();
        //setURL([source]);

        const response = await fetch("https://onlyfactories.duckdns.org:3306/images/webcam_frame.jpg");
        const imageBlob = await response.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);

    }

    //map data
    {trackingData.map((trackingData, index) => (
        <l key={index}>
            {[
            orderID =  trackingData.orderID,
            orderStatus = trackingData.orderStatus
            ]
            }
        </l>
    ))}

    
    //map factory orderID
    {factoryID.map((factoryID, index) => (
        <l key={index}>
            {
            factoryOrderID = factoryID.orderID
            }
        </l>
    ))}
    
    
    console.log("OrderID: ",orderID);
    console.log("factoryOrderID: ",factoryOrderID);
    console.log("FactoryID: ", factoryID);

    // write if statement to check entered orderID against orderID currently in factory
    if(orderID === factoryOrderID){
        return(

            <div>
            <Status>
                <h1>Tracking Status</h1> 
            </Status>
            <Status>
                <div>
                    <OrderNS>
                    <h2>
                        Order Number: {orderID}
                    </h2>
                    </OrderNS>
                    <WebcamBox>
                        
                        <img width="100%" src={img} alt="webcam image" />         

                    </WebcamBox>
                    <OrderNS>
                    <h2>
                        Order Status: {orderStatus}
                    </h2>
                    </OrderNS>
                </div>
            </Status>
            </div>
        )
    }
    else{
        return(

            <div>
            <Status>
                <h1>Tracking Status</h1> 
            </Status>
            <Status>
                <div>
                    <OrderNS>
                    <h2>
                        Order Number: {orderID}
                    </h2>
                    </OrderNS>

                    <OrderNS>
                    <h1>
                        Order is not being processed. 
                    </h1>
                    </OrderNS>

                    <OrderNS>
                    <h2>
                        Order Status: {orderStatus}
                    </h2> 
                    </OrderNS>
                </div>
            </Status>
            </div>
        )
    }
}

export default TrackingStatus