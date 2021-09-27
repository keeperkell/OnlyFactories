//file: src/components/Button.js

import { getNodeText } from "@testing-library/dom";
import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = props.name
    }

    render(){
        return (
        <button style = {{height: 50, width: 250, backgroundColor: "#f1b300",marginLeft: 50, borderRadius: 20, borderWidth: 4, borderColor: "#191919"}}>
            {this.state}
        </button>
        )
    }
}

export default Button