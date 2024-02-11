import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../const/normalized-mock";
import { getRestaurants } from "./thunks/get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState: entityAdapter.getInitialState(),
	extraReducers: (builder) =>
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
			console.log(payload)
      entityAdapter.setAll(state, payload);
    }),
	// initialState: {
	// 	entities: normalizedRestaurants.reduce((acc, restaurant) => {
	// 		acc[restaurant.id] = restaurant;

	// 		return acc;
	// 	}, {}),
	// 	id: normalizedRestaurants.map(({ id }) => id),
	// },
});