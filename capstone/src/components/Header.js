//file src/components/Header.js

import React from "react";
import logo from '../images/Vandals_logo.png';
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBar = styled.header`
    width: 100%;
    padding: 0.5em 1em;

    display: grid;
    grid-template-columns: 64px auto 64px;
    place-self: center center;

    height: 76px;
    position: fixed;
    align-items: center;

    background-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-self: center center;

    ul{
        list-style: none;
    }
    li{
        padding: 1.5em;
        //display: inline;
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
        border: 18px solid rgba(0, 0, 0, 0);
        border-radius: 8px;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
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
            
            
            <p>
                Login       
            </p>
        </HeaderBar>
    )
}

export default Header