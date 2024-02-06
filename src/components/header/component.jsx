import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import { Login } from "../login/component";
import { Logout } from "../logout/component";

export const Header = () => {
	const { user } = useContext(UserContext);
	return (
		<div>
			<button>Заказ</button>
			<button>Смена Темы</button>
			<Login />
			{user && 
			<>
				<p>
					Добро пожаловать, {user.name} 
					<Logout />
				</p>
			</>
			}
		</div>
	);
};