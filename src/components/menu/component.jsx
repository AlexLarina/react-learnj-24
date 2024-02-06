import { Dish } from "../dish/component";

export const Menu = ({menu}) => {
	if (!menu) {
		return null;
	}
	console.log(menu)
	
	return (
		<div>
			<h3>Меню</h3>
			<ul>
				{
					menu.map((dishId) => <li key={dishId}><Dish dishId={dishId}/></li>)
				}
			</ul>
		</div>
	);
};