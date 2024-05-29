import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART, CLEAR_CART } from '../actions/cart';

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const updatedTotalAmount = state.totalAmount + action.payload.price;
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const newItem = { ...action.payload, quantity: 1 };
        updatedItems = state.items.concat(newItem);
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case REMOVE_ITEM_FROM_CART:
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      const itemToRemove = state.items[itemIndex];
      const updatedAmount = state.totalAmount - itemToRemove.price;

      let newItems;
      if (itemToRemove.quantity === 1) {
        newItems = state.items.filter(item => item.id !== action.payload);
      } else {
        const updatedItem = { ...itemToRemove, quantity: itemToRemove.quantity - 1 };
        newItems = [...state.items];
        newItems[itemIndex] = updatedItem;
      }

      return {
        ...state,
        items: newItems,
        totalAmount: updatedAmount,
      };

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
