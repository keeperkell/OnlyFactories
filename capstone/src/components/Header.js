//file src/components/Header.js

import React from "react";
import logo from '../images/Vandals_logo.png';

const Header = () => {
    return(
        <header>
            <img src={logo} alt="University of Idaho Logo" height="40" />;
        </header>
    )
}

export default Header