import { configureStore } from "@reduxjs/toolkit";
import foodReducer from "./slices/FoodSlice";

const Store = configureStore({
	reducer: {
		foods: foodReducer,
	},
});

export default Store;
