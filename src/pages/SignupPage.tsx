import { Link } from "react-router-dom";

import { Container } from "../components/container";
import { SignupForm } from "../components/signupForm";

const SignupPage: React.FC = () => {
	return (
		<Container>
			<h1>Registrate aquí</h1>
			<SignupForm />
			<p>
				Ya tienes cuenta?
				<Link to="/login">Inicia sesión</Link>
			</p>
		</Container>
	);
};

export default SignupPage;
