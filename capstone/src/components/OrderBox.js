//file: src/components/OrderBox.js

import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";

const Order = styled.div`
    height: 750px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

    color: #333333;

`

class OrderForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

const OrderBox = () => {
    return (
        
            <OrderForm />
    )
}

export default OrderForm