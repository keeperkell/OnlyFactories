import * as React from "react"
import { Dialog, DialogOverlay } from "@reach/dialog"
//import Dialog from "@material-ui/core/Dialog";
import "@reach/dialog/styles.css";
import styled from "styled-components";
import * as MUI from '@mui/material'
import '../globalStyles'
import * as Yup from 'yup';
import {Formik, Form } from "formik";
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import PaymentInputs from "./CreditCardForm";

const MyDialog = styled(Dialog)`
  border: solid 5px black;
  background-color: rgba(255, 255, 255, 1);
  color: black;  
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  }
`



export default class PaymentPopUp extends React.Component {
  state = {
    open: false,
    callback: null
  }

  show = callback => event => {
    event.preventDefault()

    event = {
      ...event,
      target: { ...event.target, value: event.target.value }
    }

    this.setState({
      open: true,
      callback: () => callback(event)
    })
  }

  hide = () => this.setState({ open: false, callback: null })

  confirm = () => {
    this.state.callback()
    this.hide()
  }

  render() {
    return (
    <div>
      <React.Fragment>
        {this.props.children(this.show)}

        {this.state.open && (
        <MyDialog aria-label="Payment PopUp">
          <div className="app">
            <Formik

                onSubmit={async values => {
                    
                    await new Promise(resolve => setTimeout(resolve, 500));
                    
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
                        <MUI.Typography variant = "h4" component="h4" align ="center">
                            Payment Information
                        </MUI.Typography>

                        <MUI.FormControl sx = {{m: 2, minWidth: 350}}>

                        <PaymentInputs/>

                        </MUI.FormControl>

                        <MUI.FormControl sx={{m: 2, minWidth: 150}}>
                        <MUI.Button
                          variant="contained"
                          type="button"
                          className="outline"
                          onClick={this.hide}
                          //disabled={!dirty || isSubmitting}
                        >
                          Cancel
                        </MUI.Button>
                      </MUI.FormControl>

                      <MUI.FormControl sx={{m: 2, minWidth: 150}}>
                        <MUI.Button 
                          type="submit" 
                          variant="contained"
                          disabled={isSubmitting}
                          onClick={this.confirm}
                          >
                          Submit
                        </MUI.Button>
                      </MUI.FormControl>
                    
                    </Form>
                )}
            </Formik>
          </div>

        </MyDialog>
        )}
      </React.Fragment>
      </div>
    )
  }
}
