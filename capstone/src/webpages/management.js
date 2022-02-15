// file: src/webpages/management.js

import React, {useEffect} from "react";
import styled from "styled-components";
import StatBox from "../components/StatBox";

const ManagementPageStyle = styled.div `
    background: var(--backgroundPrimary);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (min-width: 1118px) {
        .pc2 {
            display: none;
        }
    }
    @media screen and (max-width: 1117px) {
        flex-basis: calc(100% / 3);
        scale: 70%;
        transform-origin: top;
        .pc2 {
            display: none;
        }
    }
    @media screen and (max-width: 780px) {
        flex-basis: calc(100% / 3);
        transform-origin: top;
        flex-direction: column;
        scale: 100%;
        .pc1 {
            display: none;
        }
        .pc2 {
            display: flex;
        }
    }
`

const Management = () => {
    useEffect(() => {
        document.title = "Management page"
    })

    return (
        <ManagementPageStyle>
            <StatBox />
        </ManagementPageStyle>
    );
};

export default Management;