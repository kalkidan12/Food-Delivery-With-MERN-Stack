import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialState = {
	success: false,
	signing: false,
	isLoggedIn: false,
	currentUser: [],
};
const url = process.env.REACT_APP_BACKEND_URL;
export const SignUp = createAsyncThunk(
	"user/signup",
	async (data, { rejectWithValue }) => {
		try {
			const res = await axios.post(`${url}/api/user/signup`, data);
			if (!res) return console.log("sign up failed");

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
		try {
			const res = await axios.post(`${url}/api/user/login`, data);
			if (!res) return console.log("login failed");

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
