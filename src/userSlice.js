import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	email: ""
}


const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.name = action.payload.name
			state.email = action.payload.email
			// state.user = action.payload
		},
		removeUser: (state, action) => {
			state.name = null
			state.email = null
		}
	}
})

export const { addUser, removeUser } = userSlice.actions

export const selectName = (state) => state.user.name

export default userSlice.reducer

