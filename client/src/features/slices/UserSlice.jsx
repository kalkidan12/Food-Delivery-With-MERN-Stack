import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	users: [],
	loggedIn: false,
	token: "",
	success: false,
	signing: false,
	currentUser: [],
};
export const SignUp = createAsyncThunk(
	"user/signup",
	async (data, { rejectWithValue }) => {
		const url = "http://localhost:3001/api/user/signup";
		try {
			const res = await axios.post(url, data);
			if (!res) return console.log("sign up failed");
			console.log(res.data);
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

export const LogIn = createAsyncThunk(
	"user/login",
	async (data, { rejectWithValue }) => {
		const url = "http://localhost:3001/api/user/login";
		try {
			const res = await axios.post(url, data);
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
			state.loggedIn = false;
			localStorage.removeItem("TOKEN");
		},
	},
	extraReducers: {
		[SignUp.pending]: (state, { type, payload }) => {
			state.signing = true;
		},
		[SignUp.fulfilled]: (state, { type, payload }) => {
			state.success = true;
			state.signing = false;
		},
		[SignUp.rejected]: (state, { type, payload }) => {
			state.success = false;
			state.signing = false;
			state.success = false;
		},
		[LogIn.pending]: (state, { type, payload }) => {
			state.signing = true;
			state.success = false;
		},
		[LogIn.fulfilled]: (state, { type, payload }) => {
			state.signing = false;
			state.loggedIn = true;
			state.success = true;
			state.currentUser = payload.user;
			state.token = payload.token;
			localStorage.setItem("TOKEN", state.token);
			localStorage.setItem("user", state.currentUser);
		},
		[LogIn.rejected]: (state, { type, payload }) => {
			state.signing = false;
			state.success = false;
		},
	},
});
export const { LogOut } = userSlice.actions;
export default userSlice.reducer;
