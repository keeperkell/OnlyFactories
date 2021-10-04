//file: src/components/Layout.js

import React from "react";
import Header from "./Header";
import Footer from './Footer'
import Navigation from "./OrderBox";
import styled from "styled-components";

const Wrapper = styled.div`
    @media (min-width: 700px){
        display: flex;
        top: 64px;
        position: relative;
        height: calc(100% - 64px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;

const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: 100%;
    padding: 1em;
    overflow-y: scroll;

    @media (min-width: 700px){
        flex: 1;
        margin-left: 260px;
        height: calc(100% - 64px);
        width: calc(100% - 220px);
    }
`;

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Wrapper>
                
                <Main>{children}</Main>
            </Wrapper>
            <Footer />
        </React.Fragment>
    )
}

export default Layout