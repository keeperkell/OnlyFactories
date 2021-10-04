// file: src/webpages/ordering.js

import React, {useEffect} from "react";
import OrderBox from "../components/OrderBox";
import styled from "styled-components";

const OrderPageStyle = styled.div `
    background: #FFFFFF;
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

`

const OrderPage = () => {
    useEffect(() => {
        document.title = 'Order page';
    });

    return (
        
        <OrderPageStyle>
            <OrderBox />

        </OrderPageStyle>
    );
};

export default OrderPage;