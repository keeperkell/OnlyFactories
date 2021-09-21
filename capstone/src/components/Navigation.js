//file: src/components/Navigation.js

import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.nav`
    padding: 1em;
    background: #bbdced;

    @media (max-width: 700px){
        padding-top: 64px;
    }
    @media (min-width: 700px){
        position: fixed;
        width: 50%;
        height: calc(100% - 64px);
        
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
        padding: 1em;
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
        color: #0077cc;
    }

`
const Navigation = () => {
    return (
        <Nav>
            <NavList>
                
            </NavList>
        </Nav>
    )
}

export default Navigation