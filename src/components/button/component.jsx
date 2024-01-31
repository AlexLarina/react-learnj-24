export const Button = ({onClick, option, name}) => {
	return (
			<button 
				onClick={onClick}
				disabled={option}
			>{name}</button>
	);
};