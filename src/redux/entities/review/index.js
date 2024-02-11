import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./thunks/get-reviews";
import { normalizedReviews } from "../../../const/normalized-mock";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
	name: 'review',
	initialState: entityAdapter.getInitialState(),
	extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) => {
			console.log(payload)
      entityAdapter.setAll(state, payload);
    }),
	// initialState: {
	// 	entities: normalizedReviews.reduce((acc, review) => {
	// 		acc[review.id] = review;

	// 		return acc;
	// 	}, {}),
	// 	id: normalizedReviews.map(({ id }) => id),
	// }
})