import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

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
    return (
        <Track>
            <input type = "text" onChange={getData} />
            <button onClick={()=>setSubmit(true)} >Submit </button>
        </Track>
    )
}

export default TrackingBox