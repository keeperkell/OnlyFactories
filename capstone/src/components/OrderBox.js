//file: src/components/OrderBox.js

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";
import * as MUI from '@mui/material'

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

const initialValues = {
  name: "",
  email: "",
  quantity: 1,
  color: "Red" 
}

const validationSchema = 
  Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required")
  });

const OrderForm = () => (

  <OrderBox>
    <div className="app">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}

        onSubmit={async values => {
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        
        {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
          }) => (

                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <MUI.TextField
                      id="name"
                      placeholder="Enter your name"
                      label="Name"
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

                  <MUI.TextField
                      id="email"
                      placeholder="Enter your email"
                      label="Email"
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


                  <MUI.FormControl fullWidth>
                    <MUI.InputLabel id="quantity-select-label">Color</MUI.InputLabel>
                    <MUI.Select
                        id="quantity"
                        labelId="quantity-select-label"
                        type="select"
                        value={values.quantity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <MUI.MenuItem value={1}>1</MUI.MenuItem>
                        <MUI.MenuItem value={2}>2</MUI.MenuItem>
                        <MUI.MenuItem value={3}>3</MUI.MenuItem>
                    </MUI.Select>
                  </MUI.FormControl>


                  <MUI.FormControl fullWidth>
                    <MUI.InputLabel id="color-select-label">Color</MUI.InputLabel>
                    <MUI.Select
                        id="color"
                        labelId="color-select-label"
                        type="select"
                        value={values.color}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <MUI.MenuItem value="Red">Red</MUI.MenuItem>
                        <MUI.MenuItem value="Blue">Blue</MUI.MenuItem>
                        <MUI.MenuItem value="White">White</MUI.MenuItem>
                    </MUI.Select>
                  </MUI.FormControl>

              <MUI.Button
                variant="contained"
                type="button"
                className="outline"
                onClick={handleReset}
                disabled={!dirty || isSubmitting}
              >
                Reset
              </MUI.Button>
              <MUI.Button 
                type="submit" 
                variant="contained"
                disabled={isSubmitting}>
                Submit
              </MUI.Button>

            </Form>
          )}
      </Formik>
    </div>
  </OrderBox>
);


export default OrderForm