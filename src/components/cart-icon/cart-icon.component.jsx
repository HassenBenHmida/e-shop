import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingCart } from "../../assets/cart.svg";
import "./cart-icon.styles.scss";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartDropdown, cartItems }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">
      {cartItems.reduce(
        (accumulator, cartItem) => accumulator + cartItem.quantity,
        0
      )}
    </span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
