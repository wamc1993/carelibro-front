import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Container } from "./styles";
import { logoutAction } from "../../redux/userDuck";
import { unselectPostAction } from "../../redux/postsDuck";

interface HeaderProperties {
	toComeBack?: boolean;
}

export const Header: React.FC<HeaderProperties> = ({
	toComeBack = false,
}: HeaderProperties) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logout = logoutAction(dispatch);
	const unselectPost = unselectPostAction(dispatch);

	const { firstName, lastName } = useSelector((store: any) => {
		const user = store.user.user;
		const { firstName, lastName } = user;
		return { firstName, lastName };
	});

	const handleOnComeBack = () => {
		unselectPost();
		navigate("/");
	};

	return (
		<Container>
			<p>{`Hola ${firstName} ${lastName}! 😊`}</p>
			<div className="actions">
				{toComeBack && (
					<button type="button" onClick={handleOnComeBack}>
						Regresar al home
					</button>
				)}
				<button type="button" onClick={() => logout()}>
					Cerrar sesión
				</button>
			</div>
		</Container>
	);
};
