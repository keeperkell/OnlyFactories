// file: src/webpages/tracking.js

import React, {useEffect} from "react";
//import reactDom from "react-dom";
import TrackingBox from "../components/TrackingBox";
//import TrackingStatus from "../components/TrackingStatus";
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

    @media screen and (max-width: 500px) {
        flex-basis: calc(100% / 3);
        scale: 85%;
    }
    @media screen and (max-width: 400px) {
        flex-basis: calc(100% / 3);
        scale: 75%;
    }
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

            {/*<div>
                <TrackingStatus/>
            </div>*/}
                  
            </TrackingPageStyle>
    
        )


};

export default TrackingPage;