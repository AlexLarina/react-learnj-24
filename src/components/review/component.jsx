import { useSelector } from 'react-redux';
import star from './star.png';

export const Review = ({reviewId}) => {
	console.log(reviewId)
	const review = useSelector((state) => state.review.entities[reviewId]);
	const user = useSelector((state) => state.user.entities[review.userId])
	console.log(review)
	if (!review) {
		return null;
	}

	return (
		<div>
			<p>&quot;{review.text}&quot;</p>
			<p>
				{user ? <i>{user.name}</i> : 'Посетитель' }
				<span>
					{
						[...new Array(review.rating)].map(
							(item, index) => 
								<img key={`${review.user}-star-${index}`} src={star} alt="Rating star" /> 
							)
						}
				</span>
			</p>
		</div>
	);
};