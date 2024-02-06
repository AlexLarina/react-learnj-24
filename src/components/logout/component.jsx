import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export const Logout = () => {
	const {setUser} = useContext(UserContext);

	return (
		<button onClick={() => setUser(null)}>Logout</button>
	);
};