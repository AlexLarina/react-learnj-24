import { useSelector } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({chosenRestaurantId}) => {
	const restaurant = useSelector((state) => 
		selectRestaurantById(state, chosenRestaurantId)
	)

	if (!restaurant) {
		return null;
	}
	
	return (
		<div>
			<h2>{restaurant.name}</h2>
			<Menu menu={restaurant.menu} />
			<Reviews reviews={restaurant.reviews}/>
			<ReviewForm />
		</div>
	);
};