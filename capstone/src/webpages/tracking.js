// file: src/webpages/tracking.js

import React, {useEffect, useState} from "react";
import reactDom from "react-dom";
import TrackingBox, { orderData, oSubmit } from "../components/TrackingBox";
import TrackingStatus from "../components/TrackingStatus";
import styled from "styled-components";
import App from "../App.jsx";


const TrackingPageStyle = styled.div `
    background: #FFFFFF;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

`


const TrackingPage = () => {
    useEffect (() => {
        document.title = 'Tracking Page';
    });

        return (

            <TrackingPageStyle>
            
            <div>
                <TrackingBox/>
                </div>

            <div>
                <TrackingStatus/>
                </div>
                  
            </TrackingPageStyle>
    
        )


};

export default TrackingPage;