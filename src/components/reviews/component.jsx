import { useSelector } from "react-redux";
import { selectReviews } from "../../redux/entities/review/selectors";
import { Review } from "../review/component";

export const Reviews = () => {
	const reviews = useSelector(selectReviews);
	if (!reviews) {
		return null;
	}

	return (
		<>
			<h3>Отзывы</h3>
			<ul>
				{
					Object.keys(reviews).map((reviewId) => <li key={reviewId}><Review reviewId={reviewId}/></li>)
				}
			</ul>
		</>
	);
};