import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingCart } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartDropdown }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
