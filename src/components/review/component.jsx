import star from './star.png';

export const Review = ({review}) => {
	if (!review) {
		return null;
	}

	return (
		<div>
			<p>&quot;{review.text}&quot;</p>
			<p>
				<i>{review.user}</i>
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