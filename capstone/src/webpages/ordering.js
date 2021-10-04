// file: src/webpages/ordering.js

import React, {useEffect} from "react";
import OrderBox from "../components/OrderBox";
import styled from "styled-components";

const OrderPageStyle = styled.div `
    background: #a9d7eb;
    align-items: center;

`

const OrderPage = () => {
    useEffect(() => {
        document.title = 'Order page';
    });

    return (
        <OrderPageStyle>
            <h1>Capstone</h1>
            <p>This is the order page...</p>
            <OrderBox />

        </OrderPageStyle>
    );
};

export default OrderPage;