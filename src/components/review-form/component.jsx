import { useReducer, useContext } from 'react';
import { Counter } from "../counter/component";
import { UserContext } from "../../contexts/user";

const RATING_LIMIT = {
	MIN: 1,
	MAX: 5,
	STEP: 0.5
}

const DEFAULT_FORM_VALUE = {
	name: '',
	text: '',
	rating: 5,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "setName":
			return {...state, name: action.payload};
		case "setText":
			return {...state, text: action.payload};
		case "setRating":
				return {...state, rating: action.payload};
		default: 
			return state;
	}
};

export const ReviewForm = () => {
	const { user } = useContext(UserContext);
	const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

	return (
		user && <>
			<h3>Ваш отзыв</h3>
			<div>
				<div>
					{user.name}
				</div>

				<div>
					<Counter
						value={formValue.rating}
						increment={
							() => {
								if (formValue.rating < RATING_LIMIT.MAX) {
									dispatch({ type: "setRating", payload: formValue.rating + RATING_LIMIT.STEP})
								}
							}
						}
						decrement={
							() => {
								if (formValue.rating > RATING_LIMIT.MIN ) {
									dispatch({ type: "setRating", payload: formValue.rating - RATING_LIMIT.STEP})
								}
							}
						}
						minValue={RATING_LIMIT.MIN}
						maxValue={RATING_LIMIT.MAX}
					/>
				</div>		

				<div>
					<label htmlFor="text">Review text:</label>
					<input 
						id="text" 
						type="text"
						placeholder="Поделитесь впечатлениями"
						value={formValue.text}
						onChange={(event) => 
							dispatch({ type: "setText", payload: event.target.value})
						}
					/>
				</div>

			</div>
		</>
	);
};