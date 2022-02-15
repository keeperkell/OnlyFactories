// file: src/webpages/about.js

import React, {useEffect} from "react";
import Keller_HS from '../images/Keller_HS.jpg';
import Justin_HS from '../images/Justin_HS.jpg';
import Parker_HS from '../images/Parker_HS.jpg';

const About = () => {
    useEffect (() => {
        document.title = 'About Page';
    });

    return (
        <div style={{textAlign: "center"}}>
            <br></br>
            <h1>About the Team</h1>

            <p><br></br></p> 

            <table style={{ marginLeft: 'auto', marginRight: 'auto', borderSpacing: '55px 5px', paddingTop: '20px', width: '50%', wordWrap: 'break-word'}}>
                <tr>
                    <th><img src={Keller_HS} height="200" style={{ boxShadow: '3px 3px 3px 3px grey'}} /></th>
                    <th><img src={Justin_HS} height="200" style={{ boxShadow: '3px 3px 3px 3px grey'}}/></th>
                    <th><img src={Parker_HS} height="200" style={{ boxShadow: '3px 3px 3px 3px grey'}}/></th>
                </tr>
                <tr style={{ fontSize: '20px'}} >
                    <th>Keller Lawson</th>
                    <th>Justin Harris</th>
                    <th>Parker Weisel</th>
                </tr>
                <tr>
                    <td>Computer Science, Sr.</td>
                    <td>Computer Science, Sr.</td>
                    <td>Computer Science, Sr.</td>
                </tr>
                <tr>
                    <td>Team Lead</td>
                    <td>Developer</td>
                    <td>Developer</td>
                </tr>
                <tr><th></th><th></th><th></th></tr>
                <tr>
                    <td>This is a senior capstone project from the University of Idaho and allows customers
                to order red, blue, and white disks from a Fischer-Technik Factory located in
                Couer d'Alene, Idaho. </td>
                    <td>This is a senior capstone project from the University of Idaho and allows customers
                to order red, blue, and white disks from a Fischer-Technik Factory located in
                Couer d'Alene, Idaho.</td>
                    <td>This is a senior capstone project from the University of Idaho and allows customers
                to order red, blue, and white disks from a Fischer-Technik Factory located in
                Couer d'Alene, Idaho.</td>
                </tr>
            </table>

        </div>
    );
};

export default About;