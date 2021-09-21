// file: src/webpages/about.js

import React, {useEffect} from "react";
import logo from '../images/Vandals_logo.png';

const About = () => {
    useEffect (() => {
        document.title = 'About Page';
    });

    return (
        <div>
            <h1>Capstone</h1>
            <p>This is the About page...</p>
            <img src={logo} height="400"></img>
        </div>
    );
};

export default About;