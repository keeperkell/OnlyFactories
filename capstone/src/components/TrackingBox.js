import { render } from "@testing-library/react";
import React, {useState} from "react";
import reactDom from "react-dom";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import TrackingStatus from "../components/TrackingStatus";

const Track = styled.div`
    height: 25px;
    width: 235px;
    background: #000000;

    color: #FFFFFF;

`


const TrackingBox = () => {
    const [data, setData] = useState(null);
    const [submit, setSubmit] = useState(false);
    

    function getData(val)
    {
        setData(val.target.value)
        setSubmit(false)
        console.warn(val.target)
    }
    
    //show tracking box if order number has not been submitted, 
    //show order # and status if tracking number has been submitted
    return (
            <div>
                 {submit ? 
                 <div> 
                     <h1> </h1>
                        <p>Order Status: {data} </p>
                            <TrackingStatus/> 
                 </div> : 
                     <div> Enter Order Number:
                         <p></p>
                            <Track>
                                <input type = "text" onChange={getData} />
                                <button onClick={() => setSubmit(true)} >Submit </button>
                            </Track>
                    </div>}
             </div>
    );

}

export default TrackingBox