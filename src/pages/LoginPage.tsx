import { Link } from "react-router-dom";

import { LoginForm } from "../components/loginForm";
import { Container } from "../components/container";

const LoginPage: React.FC = () => {
	return (
		<Container>
			<h1>Inicio de sesión</h1>
			<LoginForm />
			<p>
				No tienes cuenta?
				<Link to="/signup">Registrate</Link>
			</p>
		</Container>
	);
};

export default LoginPage;
