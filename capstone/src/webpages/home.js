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
        <div>
            <h1>Factory Ordering System</h1>
            <p>Make orders and track them.</p>
            <p>To start, make an order by clicking on Order. If you have already ordered something and would like to track it, click Track</p>

            <Link to = "/ordering">
                <Button name = "Order" />
            </Link>
            <Link to = "/Tracking">
                <Button name = "Track" />
            </Link>
        </div>
    );
};

export default Home;