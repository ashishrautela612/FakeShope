export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

export const removeItemFromCart = (id) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
