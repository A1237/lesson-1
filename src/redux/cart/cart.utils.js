export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingToCart = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  // if (existingToCart) {
  //   return cartItems.map(cartItem =>
  //     cartItem.id === cartItemToAdd.id
  //       ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //       : cartItem
  //   );
  // }

  if (existingToCart) {
    return cartItems.map(cartItem => {
      if (cartItem.id === cartItemToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      } else {
        return cartItem;
      }
    });
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};