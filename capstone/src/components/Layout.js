//file: src/components/Layout.js

import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="navigationWrapper">
                <Navigation />
                <main>{children}</main>
            </div>
        </React.Fragment>
    )
}

export default Layout