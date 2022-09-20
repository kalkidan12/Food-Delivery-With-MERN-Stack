import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	success: false,
	checkout_link: "/",
	error: "",
};
const url = process.env.REACT_APP_BACKEND_URL;

export const AcceptPayment = createAsyncThunk(
	"payment/make-payment",
	async (initializeOptions, { rejectWithValue }) => {
		try {
			const res = await axios.post(
				`${url}/api/payment/initialize-payment`,
				initializeOptions,
			);
			return res.data;
		} catch (error) {
			if (error.res && error.res.data.message) {
				return rejectWithValue(error.res.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);

const paymentSlice = createSlice({
	name: "payment",
	initialState,
	reducers: {
		LogOut(state) {
			state.loggedIn = false;
			localStorage.removeItem("TOKEN");
		},
	},
	extraReducers: {
		[AcceptPayment.pending]: (state, { type, payload }) => {
			state.success = false;
		},
		[AcceptPayment.fulfilled]: (state, { type, payload }) => {
			state.success = true;
			state.checkout_link = payload.checkout_url;

			if (state.chekout_link !== null) {
				window.location.replace(state.checkout_link)?.focus();
			}
			state.error = false;
		},
		[AcceptPayment.rejected]: (state, { type, payload }) => {
			state.success = false;
			state.error = payload.message;
		},
	},
});
export default paymentSlice.reducer;
