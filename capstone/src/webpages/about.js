// file: src/webpages/about.js

import React, {useEffect} from "react";
import logo from '../images/Vandals_logo.png';

const About = () => {
    useEffect (() => {
        document.title = 'About Page';
    });

    return (
        <div style={{textAlign: "center"}}>
            <h1>OnlyFactories</h1>

            <p>This is a senior capstone project from the University of Idaho and uses
                a miniture factory that simulates things that a real factory 
                would do.</p> 

            <p>It tracks and updates the orders as they go through the
                factory and keeps record of current and past orders online.</p>

            <img src={logo} height="250" alt="University of Idaho Logo"></img>
        </div>
    );
};

export default About;