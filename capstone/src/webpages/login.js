// file: src/webpages/home.js

import React, {useEffect} from "react";
import SignIn from "../components/SignIn";
import styled from "styled-components";

const LoginPageStyle = styled.div `
    background: var(--backgroundPrimary);
    align-items: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 40px;

    @media screen and (max-width: 500px) {
        flex-basis: calc(100% / 3);
        scale: 85%;
    }
    @media screen and (max-width: 400px) {
        flex-basis: calc(100% / 3);
        scale: 75%;
    }
`

const Login = () => {
    useEffect(() => {
        document.title = "Login page"
    })

    return(
        <LoginPageStyle>
            <SignIn />
        </LoginPageStyle>
    );
};

export default Login;