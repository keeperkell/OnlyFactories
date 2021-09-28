// file: src/webpages/tracking.js

import React, {useEffect} from "react";
import TrackingBox from "../components/TrackingBox";

const Tracking = () => {
    useEffect (() => {
        document.title = 'Tracking Page';
    });

    return (
        <div>
            <h1>Track Your Order</h1>
            <p>Enter Order Number: </p>
            <TrackingBox />
        </div>
    );
};

export default Tracking;