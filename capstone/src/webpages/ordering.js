// file: src/webpages/ordering.js

import React, {useEffect} from "react";
import OrderBox from "../components/OrderBox";
import styled from "styled-components";
import '../globalStyle.css';

const OrderPageStyle = styled.div `
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