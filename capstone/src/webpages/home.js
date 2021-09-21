// file: src/webpages/home.js

import React, {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        document.title = "Project Name"
    })
    
    return (
        <div>
            <h1>Capstone</h1>
            <p>This is home page</p>
        </div>
    );
};

export default Home;