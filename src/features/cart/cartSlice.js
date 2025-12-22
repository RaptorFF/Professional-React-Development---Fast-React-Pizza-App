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
