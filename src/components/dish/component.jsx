import { useState } from "react";
import { Counter } from "../counter/component";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";

const DISH_LIMIT = {
	MIN: 0,
	MAX: 5,
	STEP: 1
}

export const Dish = ({dishId}) => {
	const [dishAmount, setDishAmount] = useState(0);
	const dish = useSelector((state) => 
		selectDishById(state, dishId)
	);

	if (!dish) {
		return null;
	}

	return (
		<div>
			<div>
				<p>
					<span>{dish.name} </span>
					<cite>({dish.price} $)</cite>
				</p>
				<i>{dish.ingredients.join(", ")}</i>
			</div>
			<Counter 
				value={dishAmount}
				increment={
					() => {
						if (dishAmount < DISH_LIMIT.MAX ) {
							setDishAmount(dishAmount + DISH_LIMIT.STEP)
						}
					}
				}
				decrement={
					() => {
						if (dishAmount > DISH_LIMIT.MIN ) {
							setDishAmount(dishAmount - DISH_LIMIT.STEP)
						}
					}
				}
				minValue={DISH_LIMIT.MIN}
				maxValue={DISH_LIMIT.MAX}
			/>
		</div>
	);
};