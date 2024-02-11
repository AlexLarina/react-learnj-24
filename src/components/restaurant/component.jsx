
import { useState, useEffect } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";
import { ReviewForm } from "../review-form/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";
import { selectIsLoading } from "../../redux/ui/request";

export const Restaurant = ({chosenRestaurantId}) => {
	const restaurant = useSelector((state) => 
		selectRestaurantById(state, chosenRestaurantId)
	)
	
	const [menuRequestId, setMenuRequestId] = useState();
	const isMenuLoading = useSelector(
    (state) => menuRequestId && selectIsLoading(state, menuRequestId)
  );
	const dispatch = useDispatch();

  useEffect(() => {
    setMenuRequestId(dispatch(getDishes(chosenRestaurantId)).requestId);
  }, [dispatch, chosenRestaurantId]);

	if (!restaurant) {
		return null;
	}
	
	return (
		<div>
			<h2>{restaurant.name}</h2>
			{
				isMenuLoading 
				? (
					<div>Menu loading...</div>
				) 
				:
				<Menu />
			}

			{/* <Reviews reviews={restaurant.reviews}/> */}
			<ReviewForm />
		</div>
	);
};