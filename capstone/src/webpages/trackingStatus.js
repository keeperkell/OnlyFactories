// file: src/webpages/trackingStatus.js

import React, {useEffect} from "react";
//import reactDom from "react-dom";
//import TrackingBox, { orderData, oSubmit } from "../components/TrackingBox";
import TrackingStatus from "../components/TrackingStatus";
import styled from "styled-components";
//import App from "../App.jsx";
import '../globalStyle.css';



const TrackingPageStyle = styled.div `
    background: var(--backgroundPrimary);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

`


const TrackingStatusPage = () => {
    useEffect (() => {
        document.title = 'Tracking Status Page';
    });

        return (

            <TrackingPageStyle>

            <div>
                <TrackingStatus/>

            </div>
                  
            </TrackingPageStyle>
    
        )


};

export default TrackingStatusPage;