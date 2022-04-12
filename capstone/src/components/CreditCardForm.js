import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export var cardNumber;
export var expDate;
export var cvc;

//https://www.npmjs.com/package/react-payment-inputs#errortextprops
// man page for react-payment-inputs

const handleCcChange = e => {
  cardNumber= e.target.value;
}

const handleExpChange = e => {
  expDate= e.target.value;
}

export default function PaymentInputs() {
  const {
    meta,
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
      <div>
        <PaymentInputsWrapper style={{width: "450px"}}>
          <svg {...getCardImageProps({ images })} />
          <input {...getCardNumberProps({onChange: handleCcChange})}  />
        </PaymentInputsWrapper>

        <PaymentInputsWrapper style={{width: "150px"}}>
          <input {...getExpiryDateProps({onChange: handleExpChange})}  />
        </PaymentInputsWrapper>

        <PaymentInputsWrapper style={{width: "100px"}}>
          <input {...getCVCProps()} value={cvc} />
        </PaymentInputsWrapper>
      </div>
  );
}

