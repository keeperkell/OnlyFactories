// file: src/webpages/profit.js

import React, {useEffect} from "react";
import styled from "styled-components";
import LineC from "../components/LineC";

const ProfitPageStyle = styled.div `
    background: var(--backgroundPrimary);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (max-width: 1024px) {
        flex-basis: calc(100% / 3);
        scale: 70%;
    }
    @media screen and (max-width: 767px) {
        flex-basis: calc(100% / 3);
        scale: 50%;
    }
    @media screen and (max-width: 520px) {
        flex-basis: calc(100% / 3);
        scale: 35%;
        flex-direction: column;
    }
`

const Profit = () => {
    useEffect(() => {
        document.title = "Profit page"
    })

    return (
        <ProfitPageStyle>
            <LineC />
        </ProfitPageStyle>
    );
};

export default Profit;