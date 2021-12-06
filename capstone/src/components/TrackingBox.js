import { render } from "@testing-library/react";
import React, {useState} from "react";
import reactDom from "react-dom";
import {Link, Redirect} from 'react-router-dom';
import styled from "styled-components";
import TrackingStatus from "../components/TrackingStatus";
import * as MUI from '@mui/material';
import * as Yup from 'yup';
import {Formik, Form } from "formik";
import { Trackorder } from "../webpages/tracking";


const TrackStyle = styled.div`
    height: 600px;
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    color: #333333;

    .MUI.FormControl{
        width: 80%
    }

`
const initialValues = {
    orderID: ""
};

const validationSchema = 
    Yup.object().shape({
        orderID: Yup.string().required()
    });

export var orderData = null;

const TrackingBox = () => (

    <TrackStyle>
    
        <div className="app">

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}

                onSubmit={async values => {
                    
                    await new Promise(resolve => setTimeout(resolve, 500));
                    //alert(JSON.stringify(values, null, 2));

                    //parse and slice off order number
                    var orderLen = values.length;
                    var orderNum = values.orderID.slice(0,orderLen);
                    console.log(orderNum);
                    alert(JSON.stringify(orderNum, null,2));
                    
                    //orderData = orderNum;
                    /*
                     // Query DB on submission for order number
                      const { data } = await API.graphql({
                        query: GQL.GetOrder,
                        variables: { id : orderNum}                        
                    })
                    

                    var tempData = data;
                    var tempData2 = JSON.stringify(tempData);
                    orderData = tempData2.slice(13);

                    console.log('Order: ', orderData);
                    //alert(JSON.stringify(data, null, 2));
                    */

                    //Send POST request to NodeJS over express Start

                    let response = await fetch(`http://ec2-18-217-72-251.us-east-2.compute.amazonaws.com:3306/tracking`, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(values),
                        })

                    if (response.errors) {
                    console.error(response.errors)
                    }

                    let responseJson = await response.json()

                    if (responseJson['message']) {
                    console.log(responseJson['message'])
                    }
                    //Send POST request to NodeJS over express End


                    
                }}
            >
                {({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleSubmit,
                    handleReset
                }) => (
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <MUI.Typography variant = "h3" component="h3" align ="center">
                            Tracking Form
                        </MUI.Typography>

                        <MUI.FormControl sx = {{m: 2, minWidth: 450}}>
                            <MUI.TextField
                                id="orderID"
                                name="orderID"
                                placeholder="Enter your Order Number"
                                label="Order Number"
                                type="text"
                                value={values.orderNumber}
                                onChange={handleChange}
                                required="true"
                                className={
                                    errors.orderNumber && touched.orderNumber
                                    ? "text-input error"
                                    : "text-input"

                                }
                            />
                        </MUI.FormControl>

                        <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                        <MUI.Button
                          variant="contained"
                          type="button"
                          className="outline"
                          onClick={handleReset}
                          disabled={!dirty || isSubmitting}
                        >
                          Reset
                        </MUI.Button>
                      </MUI.FormControl>
        
                      <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                        <MUI.Button 
                          type="submit" 
                          variant="contained"
                          disabled={isSubmitting}
                          >
                          Submit
                        </MUI.Button>
                      </MUI.FormControl>
                    
                    </Form>
                )}
            </Formik>
        </div>
    </TrackStyle>
);

export default TrackingBox