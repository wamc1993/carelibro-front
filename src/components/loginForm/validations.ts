import * as Yup from "yup";

const validations = Yup.object({
	email: Yup.string().required("Ingresa un email").email("Email inválido"),
	password: Yup.string()
		.min(6, "Ingresa una contraseña con 6 o más caracteres")
		.required("Ingresa una contraseña"),
});

export default validations;
