// file: src/webpages/stats.js

import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import StatBox from '../components/StatBox'

const Stats = () => {
    useEffect(() => {
        document.title = "Stats page"
    })

    return(
        <div style={{textAlign: "center"}}>
            <h1>Management</h1>
            <StatBox />
        </div>
    );
};

export default Stats