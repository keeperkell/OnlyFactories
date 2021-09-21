//file: src/components/Navigation.js

import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.nav`
    padding: 1em;
    background: #f7f3e9;

    @media (max-width: 700px){
        padding-top: 64px;
    }
    @media (min-width: 700px){
        position: fixed;
        width: 220px;
        height: calc(100% - 64px);
        overflow-y: scroll;
    }
`;

const NavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    line-height: 2;

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
        color: #0077cc;
    }

`
const Navigation = () => {
    return (
        <Nav>
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
            </NavList>
        </Nav>
    )
}

export default Navigation