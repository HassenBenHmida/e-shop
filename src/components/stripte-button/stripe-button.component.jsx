import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
  console.log(token);
  alert("Easy money EZ");
};

const StripeButton = ({ price }) => {
  const stripePrice = price * 100;
  return (
    <StripeCheckout
      name="Scamaz payment"
      description="This is totally safe ScamaZ"
      image="https://sendeyo.com/up/d/f3eb2117da"
      amount={stripePrice}
      panelLabel="PAY NOW!"
      label="Pay now"
      billingAddress
      shippingAddress
      stripeKey="pk_test_QCoDmU4nCQMQtrTCRRKROovf00yhPMWx91"
      token={onToken}
    />
  );
};

export default StripeButton;
