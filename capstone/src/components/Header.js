//file src/components/Header.js

import React from "react";
import logo from '../images/Factory_Logos_V2/2x/Yellowxhdpi.png';
import {Nav, NavLink, Bars, Navmenu, NavBtn, NavBtnLink, NavMenu} from './NavbarElements'

const Header = () => {
    return(
        <>
            <Nav>
                <NavMenu>
                    <a href="./">
                        <img className="img-responsive" src={logo} alt="University of Idaho Logo" height="85" padding-right="120" />
                    </a>
                </NavMenu>
                <NavMenu>
                    <NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink className="nav-link" activeClassName="active" to='/ordering'>Order Now</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink className="nav-link" activeClassName="active" to='/tracking'>Tracking</NavLink>
                </NavMenu>
                <NavMenu>
                    <NavLink className="nav-link" activeClassName="active" to='/about'>About</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Sign In</NavBtnLink>
                </NavBtn>
                
            </Nav>
        </>
    );
}

export default Header