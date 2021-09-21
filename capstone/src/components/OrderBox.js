//file: src/components/OrderBox.js

import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Order = styled.div`
    height: 250px;
    width: 250px;
    background: #000000;

    color: #FFFFFF;

`

const OrderBox = () => {
    return (
        <Order>
            <p>Fix</p>
        </Order>
    )
}

export default OrderBox