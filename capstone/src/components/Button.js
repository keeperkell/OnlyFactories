//file: src/components/Button.js

import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const This = styled.div`
    height: 50px;
    width: 250px;
    background: #f1b300;
    borderWidth: 4;
`

const Button = () => {
    return (
        <div style = {{height: 50, width: 250, backgroundColor: "#f1b300", borderRadius: 20, borderWidth: 4, borderColor: "#000000"}}/>
    )
}

export default Button