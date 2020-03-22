import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCheckoutTotal
} from "../../redux/cart/cart.selectors";

import CheckoutHeader from "../../components/chechout-header/checkout-header.component";

import "./checkout.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeButton from "../../components/stripte-button/stripe-button.component";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <CheckoutHeader />
    <div className="checkout-items">
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div className="total">TOTAL = ${total}</div>
    <div className="payment">
      <div className="payment-warn">
        <p>Use these info to test the payment process</p>
        <p>Card numbers: 4242 4242 4242 4242</p>
        <p>CVC: Any 3 digits</p>
        <p>DATE: Any future date</p>
      </div>
      <StripeButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCheckoutTotal
});

export default connect(mapStateToProps)(CheckoutPage);
