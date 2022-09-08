import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../features/slices/CartSlice";
import UserReducer from "./slices/UserSlice";

const Store = configureStore({
	reducer: {
		user: UserReducer,

		cart: cartReducer,
	},
	devTools: true,
});

export default Store;
