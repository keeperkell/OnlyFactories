import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import data from "../components/TrackingBox";


const Status = styled.div`
    height: 250px;
    width: 500px;
    background: #F1B300;

    color: #FFFFFF;   
`

const TrackingStatus = () => {

    return(
        <Status>
        <p>Place Holder Tracking Status</p>
        <data />
    </Status>
    )
}

export default TrackingStatus