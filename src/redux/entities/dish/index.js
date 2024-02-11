import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../const/normalized-mock";

export const dishSlice = createSlice({
	name: 'dish',
	initialState: {
		entities: normalizedDishes.reduce((acc, dish) => {
			acc[dish.id] = dish;
			
			return acc;
		}, {}),
		id: normalizedDishes.map(({ id }) => id)
	}
});