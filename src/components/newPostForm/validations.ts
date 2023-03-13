import * as Yup from "yup";

const validations = Yup.object({
	message: Yup.string().required("Publica algo! lo que tú quieras"),
});

export default validations;
