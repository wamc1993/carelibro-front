import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { useForm } from "../../hooks";
import { AlertBox } from "../alertBox";
import { signupAction } from "../../redux/userDuck";

import { FormInput } from "../formInput";
import validations from "./validations";

interface LoginState {
	email: string;
	lastName: string;
	password: string;
	firstName: string;
	repeatPassword: string;
}

const initialValues = {
	email: "",
	lastName: "",
	password: "",
	firstName: "",
	repeatPassword: "",
};

export const SignupForm = () => {
	const { email, password, firstName, lastName, repeatPassword, onChange } =
		useForm<LoginState>(initialValues);

	const dispatch = useDispatch();
	const signup = signupAction(dispatch);

	const { errorMessage } = useSelector((store: any) => {
		return {
			errorMessage: store.user.loginErrorMessage,
		};
	});

	const handleOnSubmit = async ({
		email,
		password,
		firstName,
		lastName,
	}: LoginState) => {
		await signup({ email, password, firstName, lastName });
	};

	return (
		<Formik
			onSubmit={handleOnSubmit}
			initialValues={initialValues}
			validationSchema={validations}
		>
			{() => (
				<Form>
					{errorMessage && (
						<AlertBox>Signup inválido, intenta nuevamente</AlertBox>
					)}
					<FormInput
						type="text"
						name="firstName"
						value={firstName}
						label={"Nombre:"}
						onChange={onChange}
					/>
					<FormInput
						type="text"
						name="lastName"
						value={lastName}
						label={"Apellido:"}
						onChange={onChange}
					/>
					<FormInput
						type="text"
						name="email"
						value={email}
						label={"Email:"}
						onChange={onChange}
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						label={"Contraseña:"}
						onChange={onChange}
					/>
					<FormInput
						type="password"
						name="repeatPassword"
						value={repeatPassword}
						label={"Repite tu contraseña:"}
						onChange={onChange}
					/>
					<button type="submit">Registrar</button>
				</Form>
			)}
		</Formik>
	);
};
