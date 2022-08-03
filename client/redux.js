const axios = require("axios");
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;

//defining userAction types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILUR = "FETCH_USER_FAILUR";
const ADD_USER_REQUEST = "ADD_USER_REQUEST";
const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
const ADD_USER_FAILUR = "ADD_USER_FAILUR";
const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
const EDIT_USER_FAILUR = "EDIT_USER_FAILUR";
const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
const DELETE_USER_FAILUR = "DELETE_USER_FAILUR";

//defining action creator
const fetchUserRequest = () => {
	return {
		type: FETCH_USER_REQUEST,
	};
};

const fetchUserSuccess = (users) => {
	return {
		type: FETCH_USER_SUCCESS,
		payload: users,
	};
};
const fetchUserFailur = (error) => {
	return {
		type: FETCH_USER_FAILUR,
		payload: error,
	};
};

//define initial state

const initialUserState = {
	loading: false,
	users: [],
	error: "",
};

// defining userReducer

const userReducer = (state = initialUserState, action) => {
	switch (action.type) {
		case FETCH_USER_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_USER_SUCCESS:
			return {
				loading: false,
				users: action.payload,
				error: "",
			};
		case FETCH_USER_FAILUR:
			return {
				loading: false,
				users: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

//defining action creator function

const getAllUsers = () => {
	return function (dispatch) {
		dispatch(fetchUserRequest());
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => {
				const users = response.data.map((user) => user.id != 1);
				dispatch(fetchUserSuccess(users));
			})
			.catch((error) => {
				dispatch(fetchUserFailur(error.message));
			});
	};
};
//combine reucer

const store = createStore(userReducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));
store.dispatch(getAllUsers());
