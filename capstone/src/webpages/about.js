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
                <tr style={{ textAlign: 'center'}}>
                    <td style={{minWidth: '20em'}}>
                        Keller Lawson is a graduating Senior in the Computer Science program at the
                        Univeristy of Idaho.His responsibilities including setting up Amazon Web Services
                         (AWS) deployment, creating the MQTT secure communication channel and RESTful API,
                         and coordinating work with the other students working on the mini-factory. 
                    </td>
                    <td style={{minWidth: '20em'}}>
                        Justin Harris is a graduating Senior in the Computer Science program at the
                        Univeristy of Idaho. One of his main responsibilities in this project was 
                        the set up and management of the MySQL database with a backend RESTful
                        API utilizing the Express Framework for communication to the frontend. 
                    </td>
                    <td style={{minWidth: '20em'}}>
                        Parker Weisel is a senior in the Computer Science program at the Univeristy 
                        of Idaho. His main responsibilities were handling the management pages and 
                        graphs using MySQL Queries, as well as the login and home pages.
                    </td>
                </tr>
            </table>

        </div>
    );
};

export default About;