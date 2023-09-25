import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from './App.jsx'
import './css/index.css'

const initialState = {
	productCounter: 0
}

const productsCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
			return { productCounter: state.productCounter + 1 };
		case "REMOVE":
				return { productCounter: state.productCounter = 0 };
    default:
      return state;
  }
};

const store = createStore(productsCounter);

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	</Provider>
)
