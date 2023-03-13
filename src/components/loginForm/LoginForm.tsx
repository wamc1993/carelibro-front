import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";

import { useForm } from "../../hooks";
import { loginAction } from "../../redux/userDuck";
import { AlertBox } from "../alertBox";

import { FormInput } from "../formInput";
import validations from "./validations";

interface LoginState {
	email: string;
	password: string;
}

const initialValues = {
	email: "",
	password: "",
};

export const LoginForm = () => {
	const { email, password, onChange } = useForm<LoginState>(initialValues);

	const dispatch = useDispatch();
	const login = loginAction(dispatch);

	const { errorMessage } = useSelector((store: any) => {
		return {
			errorMessage: store.user.loginErrorMessage,
		};
	});

	const handleOnSubmit = async ({ email, password }: LoginState) => {
		await login(email, password);
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
						<AlertBox>Log in inválido, intenta nuevamente</AlertBox>
					)}

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
					<button type="submit">Ingresar</button>
				</Form>
			)}
		</Formik>
	);
};
