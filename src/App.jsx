/* eslint-disable react/jsx-key */
import { Layout } from "./components/layout/component";
import { RestaurantCard } from "./components/restaurant-card/component";
import { restaurants } from "./const/mocks";

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <div>
					<RestaurantCard 
						restaurant={restaurant} 
						key={restaurant.id}
					/>
				</div>
      ))}
    </Layout>
  );
};