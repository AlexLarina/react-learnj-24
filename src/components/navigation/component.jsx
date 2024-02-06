import { useSelector } from "react-redux";
import { RestaurantTab } from "../restaurant-tab/component";
import { selectRestaurantIds, selectRestaurants } from "../../redux/entities/restaurant/selectors"

export const Navigation = ({onRestaurantClick}) => {
	const restaurantIds = useSelector(selectRestaurantIds);
	const restaurants = useSelector(selectRestaurants);

	return (
		<nav>
			{
				restaurantIds.map((restaurantId) => (
					<RestaurantTab 
						name={restaurants[restaurantId].name} 
						key={`nav-${restaurantId}`} 
						onClick={() => onRestaurantClick(restaurantId)}
					/>
				))
			}
		</nav>
	);
};