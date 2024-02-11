import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./thunks/get-dishes";
import { normalizedDishes } from "../../../const/normalized-mock";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
	name: 'dish',
	initialState: entityAdapter.getInitialState(),
	extraReducers: (builder) =>
    builder.addCase(getDishes.fulfilled, (state, { payload }) => {
			console.log(payload)
      entityAdapter.setAll(state, payload);
    }),
	// initialState: {
	// 	entities: normalizedDishes.reduce((acc, dish) => {
	// 		acc[dish.id] = dish;
			
	// 		return acc;
	// 	}, {}),
	// 	id: normalizedDishes.map(({ id }) => id)
	// }
});