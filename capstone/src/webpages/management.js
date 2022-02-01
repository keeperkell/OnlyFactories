// file: src/webpages/management.js

import React, {useEffect} from "react";
import styled from "styled-components";
import Piechart from "../components/Piechart";
import StatBox from "../components/StatBox";

const ManagementPageStyle = styled.div `
    background: var(--backgroundPrimary);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

`

const Management = () => {
    useEffect(() => {
        document.title = "Management page"
    })

    return (
        <ManagementPageStyle>
            <StatBox />
            <Piechart />
        </ManagementPageStyle>
    );
};

export default Management;