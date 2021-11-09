import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { orderData } from "../components/TrackingBox";
import  Amplify, {API, graphqlOperation }  from 'aws-amplify';
import * as GQL from "../graphql/queries"


const Status = styled.div`
    height: 250px;
    width: 500px;
    background: #F1B300;

    color: #FFFFFF;   
`


const TrackingStatus = () => {

    const[displayData, setDisplay] = useState(0);


    return(
        <Status>
        <p>Place Holder Tracking Status</p>
        <button onClick={() => setDisplay(displayData + 1)}> Show </button>
        <p> Your Order </p>
        <p>{JSON.stringify(orderData, null, 2)}</p>
        
        </Status>
    )
}

export default TrackingStatus