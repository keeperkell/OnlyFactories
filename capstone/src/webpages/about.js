// file: src/webpages/about.js

import React, {useEffect} from "react";
import Keller_HS from '../images/Vandals_logo.png';
import Justin_HS from '../images/Vandals_logo.png';
import Parker_HS from '../images/Vandals_logo.png';

const About = () => {
    useEffect (() => {
        document.title = 'About Page';
    });

    return (
        <div style={{textAlign: "center"}}>
            <h1>About the Team</h1>

            <p>The team consists of 3 students from the University of Idaho. </p> 

            <table >
                <tr>
                    <th><img src={Keller_HS} height="130" /></th>
                    <th><img src={Justin_HS} height="130" /></th>
                    <th><img src={Parker_HS} height="130" /></th>
                </tr>
                <tr>
                    <th>Keller Lawson</th>
                    <th>Justin Harris</th>
                    <th>Parker Weisel</th>
                </tr>
                <tr>
                    <td>Computer Science</td>
                    <td>Computer Science</td>
                    <td>Computer Science</td>
                </tr>
                <tr>
                    <td>Team Lead</td>
                    <td>Developer</td>
                    <td>Developer</td>
                </tr>
            </table>

        </div>
    );
};

export default About;