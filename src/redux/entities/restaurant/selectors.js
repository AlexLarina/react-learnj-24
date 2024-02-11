export const selectRestaurantIds = (state) => state.restaurant.id;

export const selectRestaurants = (state) => state.restaurant.entities;

export const selectRestaurantById = (state, id) => state.restaurant.entities[id];