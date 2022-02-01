import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `

    :root {
        --primary: ;
        --seconday: ;
        --tertiary: ;
        --background: #FFFFFF;
        --header: #a0a398;
        --button-bg: #808080;
    }

    body{
        margin: 0;
        padding: 0;
        background: var(--background);
        font-font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;

export default GlobalStyle;

