import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	success: false,
	checkout_link: "/",
	error: "",
};

export const AcceptPayment = createAsyncThunk(
	"payment/make-payment",
	async (initializeOptions, { rejectWithValue }) => {
		const url = "http://localhost:5000/api/payment/initialize-payment";
		try {
			const res = await axios.post(url, initializeOptions);
			console.log("payment - init - endinging");
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

// export const VerifyPayment = createAsyncThunk(
// 	"payment/verify-payment",
// 	async (data, { rejectWithValue }) => {
// 		const url = "http://localhost:3001/api/user/login";
// 		try {
// 			const res = await axios.post(url, data);
// 			if (!res) return console.log("payment verfication was interupted!");
// 			res.redirect(response.data.data.checkout_url);
// 			return res.data;
// 		} catch (error) {
// 			if (error.response && error.response.data.message) {
// 				return rejectWithValue(error.response.data.message);
// 			} else {
// 				return rejectWithValue(error.message);
// 			}
// 		}
// 	},
// );
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
