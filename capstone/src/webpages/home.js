// file: src/webpages/home.js

import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Button from '../components/Button'
import logo from '../images/Vandals_logo.png';

const Home = () => {

    useEffect(() => {
        document.title = "Home page"
    })

    return (
        <div style = {{textAlign: "center"}}>
            <h1>Factory Ordering System</h1>
            <p>Make orders and track them.</p>
            <p>To start, make an order by clicking on Order. If you have already ordered something and would like to track it, click Track</p>

            <Link to = "/ordering">
                <button style = {{height: 50, width: 250, backgroundColor: "#f1b300", borderRadius: 20, borderWidth: 4, borderColor: "#191919"}}> 
                Order </button>
            </Link>
            <Link to = "/Tracking">
                <button style = {{height: 50, width: 250, backgroundColor: "#f1b300",marginLeft: 50, borderRadius: 20, borderWidth: 4, borderColor: "#191919"}}> 
                Track </button>
            </Link>
            <p/>
            <img style ={{marginTop: 200}} src={logo} height="400"/>
        </div>
    );
};

export default Home;