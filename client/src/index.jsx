import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { fetchFoods } from "./features/slices/FoodSlice";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./features/Store";
import { getTotals } from "./features/slices/CartSlice";
// import {
// 	ThemeProvider,
// 	theme,
// 	ColorModeProvider,
// 	CSSReset,
// } from "@chakra-ui/core";
// Store.dispatch(getTotals());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={Store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
);
