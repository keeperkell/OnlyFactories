//file src/components/Header.js

import React from "react";
import logo from '../images/Vandals_logo.png';
import styled from "styled-components";

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;
    display: flex;
    height: 64px;
    position: fixed;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const Header = () => {
    return(
        <HeaderBar>
            <img src={logo} alt="University of Idaho Logo" height="55" />
        </HeaderBar>
    )
}

export default Header