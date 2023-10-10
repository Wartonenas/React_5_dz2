import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsSlice";
import { postReducer } from "./postSlice";

export const store = configureStore({
	reducer: {
		products: productsReducer,
		post: postReducer
	}
})