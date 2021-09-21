// file: src/webpages/tracking.js

import React, {useEffect} from "react";

const Tracking = () => {
    useEffect (() => {
        document.title = 'Tracking Page';
    });

    return (
        <div>
            <h1>Capstone</h1>
            <p>This is the tracking page...</p>
        </div>
    );
};

export default Tracking;