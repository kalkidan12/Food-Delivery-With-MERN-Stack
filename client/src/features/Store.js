import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { getTotals } from "../features/slices/CartSlice";
import paymentReducer from "./slices/paymentSlice";
import UserReducer from "./slices/UserSlice";

const Store = configureStore({
	reducer: {
		user: UserReducer,
		payment: paymentReducer,
		cart: cartReducer,
	},
	devTools: true,
});

export default Store;
