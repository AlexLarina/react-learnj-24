export const selectReviewById = (state, id) => state.review.entities[id];

export const selectReviews = (state) => state.review.entities;