import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./AppSlice";

const store = configureStore({
	reducer: {
		users: userReducer,
	},
});

export default store;
