// file: src/webpages/index.js

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Layout from "../components/Layout";

import Home from './home';
import OrderPage from "./ordering";
import Tracking from "./tracking";

const Webpages = () => {
    return(
        <Router>
            <Layout>
            <Route exact path = "/" component = {Home} />
            <Route path = "/ordering" component = {OrderPage} />
            <Route path = "/tracking" component = {Tracking} />
            </Layout>
        </Router>
    );
};

export default Webpages;