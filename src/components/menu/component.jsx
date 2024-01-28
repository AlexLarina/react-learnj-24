import { Dish } from "../dish/component";

export const Menu = ({menu}) => {
	if (!menu) {
		return null;
	}
	
	return (
		<div>
			<h3>Меню</h3>
			<ul>
				{
					menu.map((dish) => <li key={dish.id}><Dish dish={dish}/></li>)
				}
			</ul>
		</div>
	);
};