import { Button } from "../button/component";

export const Counter = ({value, decrement, increment, minValue, maxValue}) => {
	return (
		<div>
			<Button 
				onClick={decrement}
				option={value <= minValue}
				name={'-'}
			/> 
			<span>{value}</span>
			<Button 
				onClick={increment}
				option={value >= maxValue}
				name={'+'}
			/>
		</div>
	);
};