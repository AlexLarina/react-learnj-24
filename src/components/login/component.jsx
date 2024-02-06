import { useContext } from "react";
import { UserContext } from "../../contexts/user";

const MOCK_USER = {
	name: 'Jane Doe',
	email: 'janeDoe@gmail.com'
}

export const Login = () => {
	const {setUser} = useContext(UserContext);

	return (
		<button onClick={() => setUser(MOCK_USER)}>Login</button>
	);
};