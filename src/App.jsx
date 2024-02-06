/* eslint-disable react/jsx-key */
import { useState, useMemo } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { Navigation } from "./components/navigation/component";
import { UserContext } from "./contexts/user";

export const App = ({restaurants}) => {
  const [user, setUser] = useState(null);
  const value = useMemo(
    () => ({ user, setUser }), 
    [user]
  );

  const restaurantNames = restaurants.map((restaurant) => ({
		id: restaurant.id,
		name: restaurant.name
	}));

	const [chosenRestaurantId, setChosenRestaurantId] = useState();
	const restaurant = restaurants.find((restaurant) => restaurant.id === chosenRestaurantId);

  return (
    <UserContext.Provider value={value}>
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
    </UserContext.Provider>
  );
};