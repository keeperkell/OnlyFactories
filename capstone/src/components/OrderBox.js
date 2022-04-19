//file: src/components/OrderBox.js

import React, { useState, useEffect } from "react";
import { Formik, Form, connect } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";
import * as MUI from '@mui/material'
import '../globalStyles'
import * as mqtt from "mqtt";
//import { orderData } from "../components/TrackingBox";
import { Redirect } from "react-router-dom";
import  Confirm  from "./PaymentPopUp";
import Container from "react-modal-promise";
import ConfirmStatusChange from "./PaymentPopUp";
import PaymentPopUp from "./PaymentPopUp";
import { cardNumber, expDate, cvc } from "./CreditCardForm";

const OrderBox = styled.div`
    height: 800px;
    width: 710px;
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
  transactionID: -1

}

//variables for item prices
var red_price = '0.00', blue_price='0.00', white_price = '0.00', total_price = '0.00';

//variables to display item prices in format $ price.xx
var redP_display, blueP_display, whiteP_display, totalP_display;

const validationSchema = 
  Yup.object().shape({
    fullName: Yup.string(),
    email: Yup.string().email()
  });

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
const sendMQTTOrder = async (orderDetails) => {

  let r,w,b;

  for(r=0; r<orderDetails.quantityRED; r++){
    const currentJobID = {
      jobID: -1
    };

    await updateJobID(currentJobID);

    let newJob = {
      jobID: currentJobID.jobID,
      orderID: orderDetails.orderID,
      disk_color: 'red',
      jobStatus: 'created'
    };

    
    const addToDB = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/addJobToDb`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newJob),
              });
    
    /*
    const addToDB = await fetch(`http://localhost:3306/mqtt/addJobToDB`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newJob),
              });
    */

    if (addToDB.errors) {
      console.error(addToDB.errors)
    }
    else{

      let newSendJob = {
        msg_type: 'new_job',
        payload: {
          jobID: newJob.jobID,
          orderID: newJob.orderID,
          color: newJob.disk_color,
          cook_time: 15,
          slice: true
        }
      };

      
      const response = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/sendNewJob`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSendJob),
              });
      
      /*
      const response = await fetch(`http://localhost:3306/mqtt/sendNewJob`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSendJob),
              });
      */
    }
  }

  for(w=0; w<orderDetails.quantityWHITE; w++){
    const currentJobID = {
      jobID: -1
    };

    await updateJobID(currentJobID);

    let newJob = {
      jobID: currentJobID.jobID,
      orderID: orderDetails.orderID,
      disk_color: 'white',
      jobStatus: 'created'
    };

    
    const addToDB = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/addJobToDb`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newJob),
              });
    
    /*          
    const addToDB = await fetch(`http://localhost:3306/mqtt/addJobToDB`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newJob),
              });
    */
    
    if (addToDB.errors) {
      console.error(addToDB.errors)
    }
    else{

      let newSendJob = {
        msg_type: 'new_job',
        payload: {
          jobID: newJob.jobID,
          orderID: newJob.orderID,
          color: newJob.disk_color,
          cook_time: 15,
          slice: true
        }
      };

      
      const response = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/sendNewJob`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSendJob),
              });
      
      /*
      const response = await fetch(`http://localhost:3306/mqtt/sendNewJob`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSendJob),
              });
      */
    }
  }

  for(b=0; b<orderDetails.quantityBLUE; b++){
    const currentJobID = {
      jobID: -1
    };

    await updateJobID(currentJobID);

    let newJob = {
      jobID: currentJobID.jobID,
      orderID: orderDetails.orderID,
      disk_color: 'blue',
      jobStatus: 'created'
    };

    
    const addToDB = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/addJobToDb`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newJob),
              });
    
    /*
    const addToDB = await fetch(`http://localhost:3306/mqtt/addJobToDB`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newJob),
              });
    */
    
    if (addToDB.errors) {
      console.error(addToDB.errors)
    }
    else{

      let newSendJob = {
        msg_type: 'new_job',
        payload: {
          jobID: newJob.jobID,
          orderID: newJob.orderID,
          color: newJob.disk_color,
          cook_time: 15,
          slice: true
        }
      };

      
      const response = await fetch(`https://onlyfactories.duckdns.org:3306/mqtt/sendNewJob`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSendJob),
              });
      
      /*
      const response = await fetch(`http://localhost:3306/mqtt/sendNewJob`, {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(newSendJob),
              });
      */
    }
  }
  
  return;
};

// get max orderID and increment by random value between 1-1000
const updateOrderID = async (initialValues) =>{

  let tempNewOrderID;

  //Keep the line below this for local host testing -- fetch order data
  //const maxID = await fetch(`http://localhost:3306/api/getMaxOrderID`);
  // query db to get largest orderID
  
  const maxID = await fetch(`https://onlyfactories.duckdns.org:3306/api/getMaxOrderID`);
  
  let tempID = [await maxID.json()];
  var newID;
  {tempID.map((tempID)=>(
    <l>
      { newID = tempID.orderID}
    </l>
  ))}
  
  if( newID === '' ){
    tempNewOrderID = 0;
  }
  else{
    tempNewOrderID = parseInt(newID, 10);  
  }

  let randomNum = Math.floor(Math.random() * 1000);
  tempNewOrderID += randomNum;

  initialValues.orderID = tempNewOrderID;
};

// get max transaction ID and increment by random value between 1-1000
const updateTransactionID = async (initialValues) =>{
  let tempNewOrderID;
  
  //Keep the line below this for local host testing -- fetch order data
  //const maxID = await fetch(`http://localhost:3306/api/getMaxTransactionID`);
  // query db to get largest orderID
  const maxID = await fetch(`https://onlyfactories.duckdns.org:3306/api/getMaxTransactionID`);
  
  let tempID = [await maxID.json()];

  var newID;
  {tempID.map((tempID)=>(
      <l>
        {newID = tempID.transactionID}
      </l>
  ))}

  if( newID === '' ){
    tempNewOrderID = 0;
  }
  else{
    tempNewOrderID = parseInt(newID, 10);  
  }
  
  let randomNum = Math.floor(Math.random() * 1000);
  tempNewOrderID += randomNum;

  initialValues.transactionID = tempNewOrderID;
};

// get max jobID and increment by 1
const updateJobID = async (initialValues) =>{
  //Keep the line below this for local host testing -- fetch order data
  //const maxID = await fetch(`http://localhost:3306/api/getMaxJobID`);
  // query db to get largest jobID
  const maxID = await fetch(`https://onlyfactories.duckdns.org:3306/api/getMaxJobID`);
  
  let tempNewJobID;
  let tempID = [await maxID.json()];

  var newID;
  {tempID.map((tempID)=>(
      <l>
        {newID = tempID.jobID}
      </l>
  ))}

  if( newID === '' ){
    tempNewJobID = 0;
  }
  else{
    tempNewJobID = parseInt(newID, 10);  
  }
  
  tempNewJobID += 1;
  console.log(tempNewJobID);

  initialValues.jobID = tempNewJobID;
  console.log(initialValues);

};
const sendPaymentData = async (values, cardNumber, expDate, totalPrice) =>{

  console.log(cardNumber);
  console.log(expDate);

  var paymentDetails = {
    orderID: values.orderID,
    transactionID: values.transactionID,
    ccNumber: cardNumber,
    ccExp: expDate,
    orderTotal: totalPrice
  };

  //alert(JSON.stringify(paymentDetails, null, 2));

                /*
                //Keep the line below this for local host testing -- fetch order data
                const response = await fetch(`http://localhost:3306/api/transactions`,{
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(paymentDetails),
                  })
                  */
              
              
              //Keep line below this for testing over live connection -- fetch order data
              
              const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/transactions`, {
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(paymentDetails),
                  })
              
    
              if (response.errors) {
              console.error(response.errors)
              }
    
              let responseJson = await response.json()
    
              if (responseJson['message']) {
              console.log(responseJson['message'])
              }


}

export var orderBoxOrderData = null;

const OrderForm = () => {

  const [valueRED, setvalueRED] = useState(0);
  const [valueBLUE, setvalueBLUE] = useState(0);
  const [valueWHITE, setvalueWHITE] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [nameEntry, setFullName] = useState("");
  const [emailEntry,setEmail ] = useState("");
  const [itemPrices, setPrices] = useState([]);
  //const [tempRed, setTempRed] = useState(0);

  //query prices--only once when component loads
  useEffect(()=>{
    getItemPricing();
}, []);
  
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

//fetch data
const getItemPricing = async () => {
  //local
  //const response = await fetch(`http://localhost:3306/api/itemPrices/`);
  //server
  const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/itemPrices/`);
  
  const jsonData = await response.json();
  console.log(jsonData);
  setPrices(jsonData);
  //alert(JSON.stringify(jsonData))

  }

    //mapping JSON data
    itemPrices.map((jData, index) => (
      <l key={index}> {[red_price = itemPrices[0].cust_price,
          blue_price = itemPrices[1].cust_price,
          white_price = itemPrices[2].cust_price]}
      </l>
  
    ))

  /////////////////Start Pricing Display////////////////////////////////
  //format prices for proper display
  //get to 2 decimal places
  red_price = typeof red_price === 'number' ? red_price.toFixed(2) : 0.00;
  blue_price = typeof blue_price === 'number' ? blue_price.toFixed(2) : 0.00;
  white_price = typeof white_price === 'number' ? white_price.toFixed(2) : 0.00;
  total_price = ((valueRED*red_price) + (valueBLUE*blue_price) + (valueWHITE*white_price)).toFixed(2);

  //add $ to display out
  redP_display = "${0}  Per Unit".replace('{0}', red_price);
  blueP_display = "${0}  Per Unit".replace('{0}', blue_price);
  whiteP_display = "${0}  Per Unit".replace('{0}', white_price);
  totalP_display = "${0}".replace('{0}', total_price);

  /////////////////End Pricing display///////////////////////////////


  const handlePopSubmit = async (values) => {
              //sendMQTTOrder();
              updateOrderID(values);
              updateTransactionID(values);

              //calculate total price
              let totalPrice = (valueRED*red_price) + (valueBLUE*blue_price) + (valueWHITE*white_price);
    
              await new Promise(resolve => setTimeout(resolve, 500));
              
              
              //alert(JSON.stringify(values, null, 2));
    
              //Set up for Orders to be added to the database
              //*id needs an incremented value still*
              //*OrderId needs an incremented / randomized value still*
              //*Transaction ID will need an ID from payment system
              //*For some reason this created a _typename field in database
              //*Message me to work on more - JH
              var orderDetails = {
                orderID: values.orderID,
                email: emailEntry,
                fullName: nameEntry,
                orderStatus: "Created",
                quantityRED: valueRED,
                quantityBLUE: valueBLUE,
                quantityWHITE: valueWHITE,
                transactionID: values.transactionID,
                created_at: createTimestamp(),
                updated_at: createTimestamp()
              };
    
              orderBoxOrderData = values.orderID;
              console.log(orderBoxOrderData);
    
              //alert(JSON.stringify(orderDetails, null, 2));
    
              //Send data to NodeJS(databse) via POST Start
              
              
              //Keep the line below this for local host testing -- fetch order data
              /*const response = await fetch(`http://localhost:3306/api/ordering`,{
                  method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(orderDetails),
                  })*/
              
              
              //Keep line below this for testing over live connection -- fetch order data
              
              const response = await fetch(`https://onlyfactories.duckdns.org:3306/api/ordering`, {
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
              else{
                await sendMQTTOrder(orderDetails);
              }
    
              let responseJson = await response.json()
    
              if (responseJson['message']) {
                console.log(responseJson['message'])
              }

              sendPaymentData(values, cardNumber, expDate, totalPrice);

              //Send data to NodeJS(databse) via POST End
              setSubmitted(true);
    
  }

  const handlePopUpChange = e => {
    this.setState({select: e.target.value})
  }

  const handleReset = e => alert("Resetted")

  if(submitted){
      return <Redirect push to={{
          pathname: '/trackingstatus',
      }}
      />
  }


  return (


  <OrderBox>
    <div className="app">

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
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

            <PaymentPopUp title="Payment Information">
            {confirm => (
                <Form id="OrderForm" autoComplete="off" onSubmit={confirm(handlePopSubmit)}>
                  <MUI.Typography variant="h3" component="h3" align='center'>
                    Order Form
                  </MUI.Typography>
                  <br/>

                  <MUI.FormControl sx={{m:0.5, pl:2, fontWeight: 'bold', fontSize: 22}}>
                    Name
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m: 2, minWidth: 675}}>
                  <MUI.TextField
                      id="name"
                      placeholder="Enter your name"
                      label=""
                      type="text"
                      value={nameEntry}
                      onChange={(e) => setFullName(e.target.value)}
                      required="true"
                      className={
                          errors.name && touched.name
                          ? "text-input error"
                          : "text-input"
                      }
                  /> 
                  </MUI.FormControl> 
                  <br/>
                  <br/>

                  <MUI.FormControl sx={{m:0.5, pl:2, fontWeight: 'bold', fontSize: 22}}>
                    Email
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m: 2, minWidth: 675}}>
                  <MUI.TextField
                      id="email"
                      placeholder="Enter your email"
                      label=""
                      type="text"
                      value={emailEntry}
                      onChange={(e)=> setEmail(e.target.value)}
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
                  <br/>
                  <br/>

                  <MUI.FormControl sx={{m:1.45, pl:8, pr:14, fontWeight: 'bold', fontSize: 22}}>
                    Colors
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m:1.45, pl: 4, pr:16 , fontWeight: 'bold', fontSize: 22}}>
                    Quantity
                  </MUI.FormControl>

                  <MUI.FormControl sx={{m:1.45, pr: 2, fontWeight: 'bold', fontSize: 22}}>
                    Price
                  </MUI.FormControl>
                  
                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="color_1"
                        name="color_1"
                        placeholder="Red"
                        type="text"
                        value="Red"
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                    </MUI.FormControl>

                  <MUI.FormControl sx={{m: 1.45, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label"></MUI.InputLabel>
                    <MUI.Select
                        id="quantity_1"
                        name="quantity_1"
                        labelId="quantity-select-label"
                        type="select"
                        value={valueRED}
                        onChange={handleSelectRED}
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
                        id="red_price"
                        name="red_price"
                        placeholder="$0.00 Per Unit"
                        type="text"
                        value={redP_display}
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="color_2"
                        name="color_2"
                        placeholder="Blue"
                        type="text"
                        value="Blue"
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label"></MUI.InputLabel>
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
                        id="blue_price"
                        name="blue_price"
                        placeholder="$0.00 Per Unit"
                        type="text"
                        value={blueP_display}
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="color_3"
                        name="color_3"
                        placeholder="White"
                        type="text"
                        value="White"
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 210}}>
                    <MUI.InputLabel id="quantity-select-label"></MUI.InputLabel>
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

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="white_price"
                        name="white_price"
                        placeholder="$0.00 Per Unit"
                        type="text"
                        value={whiteP_display}
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="totals"
                        name="totals"
                        placeholder="Total"
                        type="text"
                        value="Total"
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="total_quantity"
                        name="total_quantity"
                        placeholder="Total Quantity"
                        type="text"
                        value={valueRED + valueBLUE + valueWHITE}
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

                  <MUI.FormControl sx={{m: 1.45, minWidth: 180}}>
                    <MUI.TextField
                        id="total_price"
                        name="total_price"
                        placeholder="Total Price"
                        type="text"
                        value={totalP_display}
                        //disabled={true}
                        InputProps={{
                          readOnly: true,
                        }}
                    /> 
                  </MUI.FormControl> 

              <MUI.FormControl sx={{m: 1.45, minWidth: 210, pr: 30}}>
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

              <MUI.FormControl sx={{m: 1.45, minWidth: 210}}>
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
          </PaymentPopUp>
            
          )}
          
      </Formik>

    </div>
  </OrderBox>
);
}

export default OrderForm