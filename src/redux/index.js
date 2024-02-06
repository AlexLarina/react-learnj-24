import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/index";
import { dishSlice } from "./entities/dish/index";
import { reviewSlice } from "./entities/review/index";
import { userSlice } from "./entities/user/index";

export const store = configureStore({
	reducer: combineSlices(restaurantSlice, dishSlice, reviewSlice, userSlice),
});