import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/index";
import { dishSlice } from "./entities/dish/index";

export const store = configureStore({
	reducer: combineSlices(restaurantSlice, dishSlice),
});