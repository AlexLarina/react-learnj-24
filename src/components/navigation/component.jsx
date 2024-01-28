import { RestaurantTab } from "../restaurant-tab/component";

export const Navigation = ({restaurantNames, onRestaurantClick}) => {
	return (
		<nav>
			{
				restaurantNames.map(({id, name}) => (
					<RestaurantTab 
						name={name} 
						key={`nav-${id}`} 
						onClick={() => onRestaurantClick(id)}
					/>
				))
			}
		</nav>
	);
};