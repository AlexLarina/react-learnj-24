import { useSelector } from "react-redux";
import { selectDishes } from "../../redux/entities/dish/selectors";
import { Dish } from "../dish/component";

export const Menu = () => {
	const dishes = useSelector(selectDishes);
	
	if (!dishes) {
		return null;
	}
		
	return (
		<div>
			<h3>Меню</h3>
			<ul>
				{
					Object.keys(dishes).map((dishId) => <li key={dishId}><Dish dishId={dishId}/></li>)
				}
			</ul>
		</div>
	);
};