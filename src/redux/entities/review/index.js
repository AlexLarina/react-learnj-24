import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../const/normalized-mock";

export const reviewSlice = createSlice({
	name: 'review',
	initialState: {
		entities: normalizedReviews.reduce((acc, review) => {
			acc[review.id] = review;

			return acc;
		}, {}),
		id: normalizedReviews.map(({ id }) => id),
	}
})