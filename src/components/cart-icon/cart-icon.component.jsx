import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingCart } from "../../assets/cart.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
