import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
	const response = await fetch(
		`https://602e7c2c4410730017c50b9d.mockapi.io/users`
	);
	const data = await response.json();
	console.log(data);
	return data;
});

const initialState = {
	users: [],
	loading: false,
	error: null,
	curUser: {},
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setData(state, action) {
			state.users = action.payload;
		},
		setCurrentUser(state, action) {
			state.curUser = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsers.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.users = action.payload;
				state.loading = false;
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.error = action.error.message;
				state.loading = false;
			});
	},
});

export default userSlice.reducer;
export const { setData, setCurrentUser } = userSlice.actions;
