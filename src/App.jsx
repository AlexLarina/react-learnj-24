/* eslint-disable react/jsx-key */
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { restaurants } from "./const/mocks";

export const App = () => {
  return (
    <Layout>
      {restaurants.map((restaurant) => (
        <div>
					<Restaurant
						restaurant={restaurant} 
						key={restaurant.id}
					/>
				</div>
      ))}
    </Layout>
  );
};