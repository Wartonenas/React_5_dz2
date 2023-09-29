import axios from "axios";

const initialState = {
	productsList: [],
	productCounter: 0
}

export const productsCounter = (state = initialState, action) => {
	switch (action.type) {
		case "SET_PRODUCTS":
			return { ...state, productsList: action.payload }
    case "INCREMENT":
			return { ...state, productCounter: state.productCounter + 1 };
		case "REMOVE":
				return { ...state, productCounter: state.productCounter = 0 };
    default:
      return state;
  }
};

export const fetchProduct = () => {
	return async (dispatch) => {
		const resp = await axios.get('https://dummyjson.com/products?limit=10&skip=10')
		dispatch({type: "SET_PRODUCTS", payload: resp.data.products })
	}
}

export const increment = () => {
	return { type: "INCREMENT" }
}
export const remove = () => {
	return { type: "REMOVE" }
}
