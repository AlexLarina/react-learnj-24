import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RestaurantTab } from "../restaurant-tab/component";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { selectIsLoading } from "../../redux/ui/request";
import { selectRestaurantIds, selectRestaurants } from "../../redux/entities/restaurant/selectors"

export const Navigation = ({onRestaurantClick}) => {
	//const restaurantIds = useSelector(selectRestaurantIds);
	const restaurants = useSelector(selectRestaurants);

	const [requestId, setRequestId] = useState();
	const isLoading = useSelector(
    (state) => requestId && selectIsLoading(state, requestId)
  );
	const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getRestaurants()).requestId);
  }, [dispatch]);

	return (
		<nav>
			{
				isLoading 
				? (
					<div>Loading...</div>
				) 
				:
				( 
					Object.entries(restaurants).map(([restaurantId, restaurant]) => (
						<RestaurantTab 
							name={restaurant.name} 
							key={`nav-${restaurantId}`} 
							onClick={() => onRestaurantClick(restaurantId)}
						/>
					))
				)
			}
		</nav>
	);
};