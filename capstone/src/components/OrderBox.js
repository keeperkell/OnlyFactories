//file: src/components/OrderBox.js

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";
import * as MUI from '@mui/material'
import '../globalStyles'
import * as mqtt from "mqtt";

//MQTT Setup
const url = 'wss://onlyfactories.duckdns.org:9001';
let client = mqtt.connect(url);
client.on("connect", () => {
  console.log("connected");
})

const sendOrder={
  msg_type: 'order',
}

// when form is submitted, send an MQTT message to Doug
// which will start the factory or add to orders. 
function sendMQTTOrder(){
  console.log("inside function")
  
  var payload = JSON.stringify(sendOrder);
  console.log(payload);
  client.publish('UofICapstone_Cloud', payload, (error) =>{
    if (error){
      console.error(error)
    }
  })
}

const OrderBox = styled.div`
    height: 600px;
    width: 500px;
    display: flex;
    align-items: center;
    //justify-content: center;
    margin: 0 auto;
    background-color: var(--background);
    border-radius: 8px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

    .MUI.FormControl{
      width: 80%
    }
`

const initialValues = {
  fullName: "",
  email: "",
  orderID: -1,
  transactionID: -1,
  quantityRED: 0,
  quantityBLUE: 0,
  quantityWHITE: 0
}

const validationSchema = 
  Yup.object().shape({
    fullName: Yup.string(),
    email: Yup.string().email()
  });

// pass order details in JSON and add order to databse
const addOrderToDB = (orderDetails) =>{
  
  //get current time for order creation
  var currentDate = new Date();
  // timestamp layout: YYYY/MM/DD HH:MM:SS
  orderDetails.createdAt = currentDate.getFullYear() + '/' + (currentDate.getMonth()+1) + '/'
                  + currentDate.getDate() + ' ' + currentDate.getHours() + ':'
                  + currentDate.getMinutes() + ':' + currentDate.getSeconds();
  orderDetails.updatedAt = orderDetails.createdAt;


  //connect to db
  
};

//Function to generate current time for order creation
const createTimestamp = () =>{
  
  //get current time for order creation
  var currentDate = new Date();
  // timestamp layout: YYYY/MM/DD HH:MM:SS
  var createdAt = currentDate.getFullYear() + '/' + (currentDate.getMonth()+1) + '/'
                  + currentDate.getDate() + ' ' + currentDate.getHours() + ':'
                  + currentDate.getMinutes() + ':' + currentDate.getSeconds();

  return createdAt;
  
};

// send order to orderAPI and log it in table
const sendOrderMQTT = (orderDetails) =>{
  // query db to get necesary message ID
  // increment message ID

  // Publish orderDetails to Doug over MQTT

  // store log of message in db
  
  // await response from doug

  //
  return 'Empty Function'
};


// get max orderID and increment by 1
const updateOrderID = async (initialValues) =>{

  // query db to get largest orderID
  const maxID = await fetch(`https://onlyfactories.duckdns.org:3306/api/getMaxOrderID`);
  let tempID = await maxID.json();

  let newID = tempID.map((tempID)=>tempID.orderID);
  let  tempNewOrderID = parseInt(newID, 10);
  tempNewOrderID += 1;

  initialValues.orderID = tempNewOrderID;
};

const OrderForm = () => {

  const [valueRED, setvalueRED] = useState(0);
  const [valueBLUE, setvalueBLUE] = useState(0);
  const [valueWHITE, setvalueWHITE] = useState(0);
  
  const handleSelectRED = e => {
    const colorValue = e.target.value;
    setvalueRED(colorValue);
  }

  const handleSelectBLUE = e => {
    const colorValue = e.target.value;
    setvalueBLUE(colorValue);
  }

  const handleSelectWHITE = e => {
    const colorValue = e.target.value;
    setvalueWHITE(colorValue);
  }

  return (

  <OrderBox>
    <div className="app">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}

        onSubmit={async values => {
          sendMQTTOrder();

          await new Promise(resolve => setTimeout(resolve, 500));
          //alert(JSON.stringify(values, null, 2));

          //Set up for Orders to be added to the database
          //*id needs an incremented value still*
          //*OrderId needs an incremented / randomized value still*
          //*Transaction ID will need an ID from payment system
          //*For some reason this created a _typename field in database
          //*Message me to work on more - JH
          var orderDetails = {
            //id : "5",
            orderID: 2,
            //Color: values.color_1,
            email: values.email,
            fullName: values.name,
            orderStatus: "Created",
            quantityRED: valueRED,
            quantityBLUE: valueBLUE,
            quantityWHITE: valueWHITE,
            transactionID: 222222,
            created_at: createTimestamp(),
            updated_at: createTimestamp()
          };

          alert(JSON.stringify(orderDetails, null, 2));

          //Send data to NodeJS(databse) via POST Start

          let response = await fetch(`https://onlyfactories.duckdns.org:3306/api/ordering`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderDetails),
              })

          if (response.errors) {
          console.error(response.errors)
          }

          let responseJson = await response.json()

          if (responseJson['message']) {
          console.log(responseJson['message'])
          }
          //Send data to NodeJS(databse) via POST End


          /*
          // update order IDs
          await updateIDs(orderDetails);
          // Add order to database
          await addOrderToDB(orderDetails);
          // send order to Doug and log message
          await sendOrderMQTT(orderDetails);
          */

        }}
        enableReinitialize
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
                  <MUI.Typography variant="h3" component="h3" align='center'>
                    Order Form
                  </MUI.Typography>

                  <MUI.FormControl sx={{m: 2, minWidth: 450}}>
                  <MUI.TextField
                      id="name"
                      placeholder="Enter your name"
                      label="Name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      required="true"
                      className={
                          errors.name && touched.name
                          ? "text-input error"
                          : "text-input"
                      }
                  /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 2, minWidth: 450}}>
                  <MUI.TextField
                      id="email"
                      placeholder="Enter your email"
                      label="Email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      required="true"
                      className={
                          errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                  />
                  {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                  )}
                  </MUI.FormControl>
                  
                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="name"
                        placeholder="Enter your name"
                        label="Name"
                        type="text"
                        //value={values.color_1}
                        disabled="true"
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label">Quantity</MUI.InputLabel>
                    <MUI.Select
                        id="quantity_1"
                        name="quantity_1"
                        labelId="quantity-select-label"
                        type="select"
                        value={valueRED}
                        onChange={handleSelectRED}
                        onBlur={handleBlur}
                        required="true"
                        className={
                            errors.name && touched.name
                            ? "text-input error"
                            : "text-input"
                        }
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label">Quantity</MUI.InputLabel>
                    <MUI.Select
                        id="quantity_2"
                        name="quantity_2"
                        labelId="quantity-select-label"
                        type="select"
                        value={valueBLUE}
                        onChange={handleSelectBLUE}
                        onBlur={handleBlur}
                        required="true"
                    >
                        <MUI.MenuItem value={0}>0</MUI.MenuItem> 
                        <MUI.MenuItem value={1}>1</MUI.MenuItem>
                        <MUI.MenuItem value={2}>2</MUI.MenuItem>
                        <MUI.MenuItem value={3}>3</MUI.MenuItem>
                    </MUI.Select>
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="email"
                        placeholder="Enter your email"
                        label="Email"
                        type="text"
                        //value={values.color_3}
                        disabled="true"
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 2, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label">Quantity</MUI.InputLabel>
                    <MUI.Select
                        id="quantity_3"
                        name="quantity_3"
                        labelId="quantity-select-label"
                        type="select"
                        value={valueWHITE}
                        onChange={handleSelectWHITE}
                        onBlur={handleBlur}
                        required="true"
                    >
                        <MUI.MenuItem value={0}>0</MUI.MenuItem> 
                        <MUI.MenuItem value={1}>1</MUI.MenuItem>
                        <MUI.MenuItem value={2}>2</MUI.MenuItem>
                        <MUI.MenuItem value={3}>3</MUI.MenuItem>
                    </MUI.Select>
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
  </OrderBox>
);
}

export default OrderForm