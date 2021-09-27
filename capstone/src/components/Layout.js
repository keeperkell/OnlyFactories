//file: src/components/Layout.js

import React from "react";
import Header from "./Header";
import Navigation from "./OrderBox";
import styled from "styled-components";

const Wrapper = styled.div`
    @media (min-width: 700px){
        display: flex;
        top: 76px;
        position: relative;
        height: calc(100% - 76px);
        width: 100%;
        flex: auto;
        flex-direction: column;
    }
`;

const Main = styled.main`
    position: fixed;
    height: calc(100% - 185px);
    width: calc(100% - 32px);
    padding: 1em;
    overflow-y: auto;

    @media (min-width: 700px){
        flex: 1;
        height: calc(100% - 76px);
        width: calc(100% - 32px);
    }
`;

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Wrapper>
                
                <Main>{children}</Main>
            </Wrapper>
        </React.Fragment>
    )
}

export default Layout