import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../const/normalized-mock";

export const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState: {
		entities: normalizedRestaurants.reduce((acc, restaurant) => {
			acc[restaurant.id] = restaurant;

			return acc;
		}, {}),
		id: normalizedRestaurants.map(({ id }) => id),
	},
});