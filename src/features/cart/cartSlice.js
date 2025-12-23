import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payLoad = newItem npr {pizzaId, name, quantity, unitPrice, totalPrice}
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      //payLoad = pizzaId
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload.pizzaId,
      );
    },
    increaseItemQuantity(state, action) {
      //payLoad = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      item.quantity += 1;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payLoad = pizzaId
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.unitPrice;

      // If quantity is 0, remove the item from the cart
      // cartSlice is the slice object created by createSlice
      //caseReducers contains all the reducer functions defined in the slice
      if (item.quantity === 0) cartSlice.caseReducers.removeItem(state, action);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getUsername = (state) => state.user.username;

export const getCartItems = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((acc, item) => acc + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce(
    (acc, item) => acc + item.quantity * item.unitPrice,
    0,
  );
// Get quantity of a specific item by pizzaId
// Function that returns a selector function
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)
    ?.quantity /* if item found return quantity */ ?? 0; //if item not found, return 0
