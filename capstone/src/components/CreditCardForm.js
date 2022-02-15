import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export var cardNumber;
export var expDate;
export var cvc;

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
    <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps({onChange: handleCcChange})}  />
      <input {...getExpiryDateProps({onChange: handleExpChange})}  />
      <input {...getCVCProps()} value={cvc} />
    </PaymentInputsWrapper>
  );
}

