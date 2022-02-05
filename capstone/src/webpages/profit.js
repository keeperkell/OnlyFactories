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

    @media screen and (min-width: 1025px) {
        .lc2 {
            display: none;
        }
    }
    @media screen and (max-width: 1024px) {
        flex-basis: calc(100% / 3);
        scale: 70%;
        transform-origin: top;
        .lc2 {
            display: none;
        }
    }
    @media screen and (max-width: 767px) {
        flex-basis: calc(100% / 3);
        scale: 50%;
        transform-origin: top;
        .lc2 {
            display: none;
        }
    }
    @media screen and (max-width: 520px) {
        flex-basis: calc(100% / 3);
        scale: 100%;
        .lc1 {
            display: none;
        }
        .lc2 {
            display: block;
        }
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