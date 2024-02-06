import { useSelector } from "react-redux";
import { RestaurantTab } from "../restaurant-tab/component";

export const Navigation = ({onRestaurantClick}) => {
	const restaurantIds = useSelector((state) => state.restaurant.id)
	const restaurants = useSelector((state) => state.restaurant.entities)

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