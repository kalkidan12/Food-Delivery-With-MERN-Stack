import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../features/slices/CartSlice";

const Store = configureStore({
	reducer: {
		cart: cartReducer,
	},
});

export default Store;
