import { useSelector } from 'react-redux';
import { selectReviewById } from "../../redux/entities/review/selectors";
import star from './star.png';
import { selectUserById } from '../../redux/entities/user/selectors';

export const Review = ({reviewId}) => {
	const review = useSelector((state) => 
		selectReviewById(state, reviewId)
	);
	const user = useSelector((state) => 
		selectUserById(state, review.userId)
	)
	
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