/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { Navigation } from "./components/navigation/component";

export const App = ({restaurants}) => {
  const restaurantNames = restaurants.map((restaurant) => ({
		id: restaurant.id,
		name: restaurant.name
	}));

	const [chosenRestaurantId, setChosenRestaurantId] = useState();
	const restaurant = restaurants.find((restaurant) => restaurant.id === chosenRestaurantId);

  return (
    <Layout>
      <Navigation 
				restaurantNames={restaurantNames} 
				onRestaurantClick={(name) => setChosenRestaurantId(name)}
			/>
      {
        restaurant && 
        <Restaurant
          restaurant={restaurant} 
          key={restaurant.id}
        />
      }
    </Layout>
  );
};