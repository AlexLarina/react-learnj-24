import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users";
import { normalizedUsers } from "../../../const/normalized-mock";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
	name: 'user',
	initialState: entityAdapter.getInitialState(),
	extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
			console.log(payload)
      entityAdapter.setAll(state, payload);
    }),
	// initialState: {
	// 	entities: normalizedUsers.reduce((acc, user) => {
	// 		acc[user.id] = user;

	// 		return acc;
	// 	}, {}),
	// 	id: normalizedUsers.map(({ id }) => id)
	// }
});