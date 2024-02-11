/* eslint-disable react/jsx-key */
import { useState, useMemo } from "react";
import { Layout } from "./components/layout/component";
import { Restaurant } from "./components/restaurant/component";
import { Navigation } from "./components/navigation/component";
import { UserContext } from "./contexts/user";
import { Provider } from "react-redux";
import { store } from "./redux";

export const App = () => {
  const [user, setUser] = useState(null);
  const value = useMemo(
    () => ({ user, setUser }), 
    [user]
  );

	const [chosenRestaurantId, setChosenRestaurantId] = useState();

  return (
    <Provider store={store}>
      <UserContext.Provider value={value}>
        <Layout>
          <Navigation
            onRestaurantClick={(name) => setChosenRestaurantId(name)}
          />
          {
            chosenRestaurantId && 
            <Restaurant
              chosenRestaurantId={chosenRestaurantId}
            />
          }
        </Layout>
      </UserContext.Provider>
    </Provider>
  );
};