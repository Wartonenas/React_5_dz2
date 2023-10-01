import { createSlice } from "@reduxjs/toolkit";
import products from "../components/products.json";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
    cartItems: [],
    cartCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find(item => item._id === action.payload);
      if (product) {
        const existingItem = state.cartItems.find(item => item._id === action.payload);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...product, quantity: 1 });
        }
        state.cartCount += 1;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.cartCount = 0;
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.cartItems.find(item => item._id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.cartItems.find(item => item._id === action.payload);
			if (product && product.quantity > 1) {
				state.cartCount -= 1
        product.quantity -= 1;
			}
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;