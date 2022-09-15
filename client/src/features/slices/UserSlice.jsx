import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	success: false,
	signing: false,
	isLoggedIn: false,
	currentUser: [],
};
export const SignUp = createAsyncThunk(
	"user/signup",
	async (data, { rejectWithValue }) => {
		const url = "http://localhost:5000/api/user/signup";
		try {
			const res = await axios.post(url, data);
			if (!res) return console.log("sign up failed");
			// localStorage.setItem(
			// 	"food-user",
			// 	JSON.stringify(initialState.currentUser),
			// );
			return res.data;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);

export const Login = createAsyncThunk(
	"user/login",
	async (data, { rejectWithValue }) => {
		const url = "http://localhost:5000/api/user/login";
		try {
			const res = await axios.post(url, data);
			if (!res) return console.log("login failed");
			// localStorage.setItem(
			// 	"food-user",
			// 	JSON.stringify(initialState.currentUser),
			// );
			return res.data;
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);
const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		LogOut(state) {
			state.isLoggedIn = false;
			localStorage.removeItem("food-user");
		},
	},
	extraReducers: {
		[SignUp.pending]: (state, { type, payload }) => {
			state.signing = true;
		},
		[SignUp.fulfilled]: (state, { type, payload }) => {
			state.signing = false;
			state.isLoggedIn = true;
			state.success = true;
			state.currentUser = payload.user;
			localStorage.setItem("food-user", JSON.stringify(state.currentUser));
		},
		[SignUp.rejected]: (state, { type, payload }) => {
			state.success = false;
			state.signing = false;
			state.success = false;
		},
		[Login.pending]: (state, { type, payload }) => {
			state.signing = true;
			state.success = false;
		},
		[Login.fulfilled]: (state, { type, payload }) => {
			state.signing = false;
			state.isLoggedIn = true;
			state.success = true;
			state.currentUser = payload.user;
			localStorage.setItem("food-user", JSON.stringify(state.currentUser));
		},
		[Login.rejected]: (state, { type, payload }) => {
			state.signing = false;
			state.success = false;
		},
	},
});
export const { LogOut } = userSlice.actions;
export default userSlice.reducer;
