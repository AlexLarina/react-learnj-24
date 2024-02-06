import { Review } from "../review/component";

export const Reviews = ({reviews}) => {
	if (!reviews) {
		return null;
	}

	return (
		<>
			<h3>Отзывы</h3>
			<ul>
				{
					reviews.map((reviewId) => <li key={reviewId}><Review reviewId={reviewId}/></li>)
				}
			</ul>
		</>
	);
};