export const addItemToCart = (cartItems, itemToAdd) => {
  const existsinCart = cartItems.find(item => item.id === itemToAdd.id);

  if (existsinCart) {
    return cartItems.map(cartItem =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...itemToAdd, quantity: 1}]
};