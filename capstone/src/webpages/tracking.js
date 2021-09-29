// file: src/webpages/tracking.js

import React, {useEffect} from "react";
import reactDom from "react-dom";
import TrackingBox from "../components/TrackingBox";
import TrackingStatus from "../components/TrackingStatus";

const Tracking = () => {
    useEffect (() => {
        document.title = 'Tracking Page';
    });

        return (
            <div>
             <h1>Track Your Order</h1>
            <TrackingBox />
        </div>
        );


};

export default Tracking;