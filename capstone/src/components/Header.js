//file src/components/Header.js

import React from "react";
import logo from '../images/Vandals_logo.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Nav = styled.nav`
    padding: 1em;
    padding-left: 1e;
    z-index: 2;
    position: relative;
    padding: 50em;

    @media (max-width: 700px){
        padding-top: 0; 
    }
    @media (min-width: 700px){
        position: fixed;
        
        width: 80%;
        height: 64;
        
    }
`;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;

    ul{
        list-style: none;
    }
    li{
        padding: 1.5em;
        display: inline;
    }

    a{
        text-decoration: none;
        font-weight: bold;
        font-size: 1em;
        color: #333;
    }
    a:visited {
        color: #333;
    }
    a:hover,
    a:focus{
        color: #2F81B6;
    }

`

const Header = () => {
    return(
        <HeaderBar>
            <a href="./">
                <img className="img-responsive" src={logo} alt="University of Idaho Logo" height="65" padding-right="120" />
            </a>
                
            <NavList>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ordering">Order Page</Link>
                </li>
                <li>
                    <Link to="/tracking">Tracking</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </NavList>
        </HeaderBar>
    )
}

export default Header