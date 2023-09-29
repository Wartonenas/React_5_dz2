import {
	legacy_createStore as createStore, combineReducers, applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { productsCounter } from './productsCounter'

const rootReducer = combineReducers({
	product: productsCounter
});

export const store = createStore(rootReducer, applyMiddleware(thunk));