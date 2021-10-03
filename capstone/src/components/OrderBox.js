//file: src/components/OrderBox.js

import React from "react";
import { render } from 'react-dom';
import { Formik } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";



const OrderBox = styled.div`
    height: 450px;
    width: 1000px;
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

    color: #333333;

`

const OrderForm = () => (
  <OrderBox>
    <div className="app">
    <h1>
      Demo
    </h1>

    <Formik
      initialValues={{ name: "",
                       email: "",
                       quantity: 1,
                       color: "Red" }}

      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}

      validationSchema={Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email().required("Required")
      })}>

      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;

        return (
            <form onSubmit={handleSubmit}>
                <label style={{ display: "block" }}>
                    Name
                </label>
                <input
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.name && touched.name
                        ? "text-input error"
                        : "text-input"
                    }
                />  

                <label htmlFor="email" style={{ display: "block" }}>
                    Email
                </label>
                <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                        errors.email && touched.email
                        ? "text-input error"
                        : "text-input"
                    }
                />
                {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
                )}

                <label style={{ display: "block" }}>
                    Quantity
                </label>
                <select
                    id="quantity"
                    type="select"
                    value={values.quantity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option defaultValue>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <label style={{ display: "block" }}>
                    Color
                </label>
                <select
                    id="color"
                    type="select"
                    value={values.color}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option defaultValue>Red</option>
                    <option value="Blue">Blue</option>
                    <option value="White">White</option>
                </select>
            <br/><br/>
            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

          </form>
        );
      }}
    </Formik>
  </div>
  </OrderBox>
);


export default OrderForm