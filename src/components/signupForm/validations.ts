import * as Yup from "yup";

const validations = Yup.object({
	firstName: Yup.string()
		.min(2, "El nombre debe tener 2 o más caracteres")
		.max(40, "El nombre debe tener 40 o menos caracteres")
		.required("Ingresa tu nombre"),
	lastName: Yup.string()
		.min(2, "El apellido debe tener 2 o más caracteres")
		.max(40, "El apellido debe tener 40 o menos caracteres")
		.required("Ingresa tu apellido"),
	email: Yup.string().required("Ingresa tu email").email("Email inválida"),
	password: Yup.string().min(
		6,
		"La contraseña debe tener 6 o más caracteres"
	),
	repeatPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
		.required("Repite tu nueva contraseña"),
});

export default validations;
