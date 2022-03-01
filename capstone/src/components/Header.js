//file src/components/Header.js

import React from "react";
import logo from '../images/Logos_V2/4x/Yellow_ogxxxhdpi.png';
//import logo2 from '../images/Logos_V2/4x/Yellowxxxhdpi.png';
import {Nav, NavLink, NavBtn, NavBtnLink, NavMenu} from './NavbarElements'

//Import MQTT into header status
//import PublishMQTT from './MQTT/Publish'
//import SubscribeMQTT from './MQTT/Subscribe'

const Header = () => {
    return(
        <>

            <Nav>
                <NavMenu>
                    <a href="./">
                        <img className="img-responsive" src={logo} alt="University of Idaho Logo" height="75" />
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
                    <NavBtnLink to='/login'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
            
        </>
    );
}

export default Header