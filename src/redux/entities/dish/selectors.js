export const selectDishById = (state, id) => state.dish.entities[id];

export const selectDishes = (state) => state.dish.entities;