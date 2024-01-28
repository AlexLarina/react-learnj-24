export const Dish = ({dish}) => {
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
		
		</div>
	);
};