//file src/components/Footer.js

import React from "react";
import logo from '../images/Vandals_logo.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterBar = styled.footer`
    padding: 1em 1em;
    position: fixed;
    bottom: 0; 
    width: 100%;
    background: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`;

const Footer = () => {
    return(
        <FooterBar>
            <div style = {{textAlign: "right", paddingRight: 35}}> 
                <img src={logo} height="65" /> 
            </div>
        </FooterBar>
    )
}

export default Footer