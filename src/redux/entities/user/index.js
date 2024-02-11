import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../const/normalized-mock";

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		entities: normalizedUsers.reduce((acc, user) => {
			acc[user.id] = user;

			return acc;
		}, {}),
		id: normalizedUsers.map(({ id }) => id)
	}
});