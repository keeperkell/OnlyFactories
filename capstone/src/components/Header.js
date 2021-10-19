//file src/components/Header.js

import React from "react";
import logo from '../images/Vandals_logo.png';
import {Nav, NavLink, Bars, Navmenu, NavBtn, NavBtnLink, NavMenu} from './NavbarElements'

const Header = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <a href="./">
                        <img className="img-responsive" src={logo} alt="University of Idaho Logo" height="65" padding-right="120" />
                    </a>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/' activeStyle>Home</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/ordering' activeStyle>Order Now</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/tracking' activeStyle>Tracking</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/about' activeStyle>About</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink to='/stats' activeStyle>Stats</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Sign In</NavBtnLink>
                </NavBtn>
                
            </Nav>
        </>
    );
}

export default Header