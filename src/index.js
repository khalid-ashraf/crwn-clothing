//React, ReactDOM and React Router Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

//Redux Imports
import { Provider } from "react-redux";
import { store } from "./store/store";

//Component and Style Imports
import "./index.scss";
import App from "./App";

//Context Imports
import { CartContextProvider } from "./components/contexts/cart.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* The Provider below is to wrap around the app component so that redux state and store is available to App and all children components. We need to pass our redux store that we built as prop to the provider */}
		<Provider store={store}>
			<BrowserRouter>
				<CartContextProvider>
					<App />
				</CartContextProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
