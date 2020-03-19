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

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <CheckoutHeader />
    <div className="chechout-items">
      {cartItems.map(cartItem => (
        <CheckoutItem cartItem={cartItem} />
      ))}
    </div>
    <div className="total">TOTAL = ${total}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCheckoutTotal
});

export default connect(mapStateToProps)(CheckoutPage);
