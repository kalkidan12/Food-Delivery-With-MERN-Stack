import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "history";

//initial state
const initialState = {
	foodList: [],
	status: "",
};
//create async action creator

export const fetchFoods = createAsyncThunk("foods/getAllFoods", async () => {
	const response = await axios.get(
		"https://jsonplaceholder.typicode.com/photos",
	);
	console.log(response.data);
	return response?.data;
});

const foodSlice = createSlice({
	name: "foods",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchFoods.pending]: (state, action) => {
			state.status = "pending";
		},
		[fetchFoods.fulfilled]: (state, action) => {
			state.status = "success";
			state.foodList = action.payload;
		},
		[fetchFoods.rejected]: (state, action) => {
			state.status = "rejected";
		},
	},
});

export default foodSlice.reducer;
