import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

    :root {
        --primary: ;
        --seconday: ;
        --tertiary: ;
        --background: #ffffff;
        --header: #a0a398;
        --button-bg: #808080;
    }

    body{
        margin: 0;
        padding: 0;
        background: linear-gradient(180deg, #808080, #ffffff);
        background-size: 100% 79%;
        animation: gradient 16s linear infinite;
        animation-direction: alternate;
        background-repeat: no-repeat;
        font-font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

export default GlobalStyle;

