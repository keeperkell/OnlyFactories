//file: src/components/Navigation.js

import React from "react";
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/ordering">Order Page</Link>
                </li>
                <li>
                    <Link to="/tracking">Tracking</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation