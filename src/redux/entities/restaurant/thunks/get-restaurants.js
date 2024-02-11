import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";


export const getRestaurants = createAsyncThunk(
  "restaurant/getRestaurants",
  async () => {
    const response = await fetch("http://localhost:3001/api/restaurants/");

    return response.json();
  },
  { condition: (_, { getState }) => !selectRestaurantIds(getState())?.length }
);