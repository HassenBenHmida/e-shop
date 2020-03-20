import React from "react";
import { connect } from "react-redux";

import "./checkout-item.styles.scss";
import { clearOutItem, removeItem, addItem } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItem, addItem, clearOutItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItem(cartItem)}> &#10094; </span>
        {quantity}
        <span className="arrow" onClick={() => addItem(cartItem)}> &#10095; </span>
      </div>
      <div className="price">${price}</div>
      <div className="remove-button" onClick={() => clearOutItem(cartItem)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearOutItem: item => dispatch(clearOutItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
