export const addItemToCart = (cartItems, itemToAdd) => {
  const existsinCart = cartItems.find(item => item.id === itemToAdd.id);

  if (existsinCart) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const clearItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter(item => item.id !== itemToRemove.id);
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity > 1) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return clearItemFromCart(cartItems, itemToRemove);
};
