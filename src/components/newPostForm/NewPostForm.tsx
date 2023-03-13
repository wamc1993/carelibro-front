import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import { createPostAction } from "../../redux/postsDuck";

import validations from "./validations";
import { InputContainer } from "./styles";

interface NewPostState {
	message: string;
}

const initialValues = {
	message: "",
};

export const NewPostForm = () => {
	const dispatch = useDispatch();
	const createPost = createPostAction(dispatch);

	const handleOnSubmit = async (
		{ message }: NewPostState,
		{ resetForm }: any
	) => {
		await createPost(message);
		resetForm();
	};

	return (
		<Formik
			onSubmit={handleOnSubmit}
			initialValues={initialValues}
			validationSchema={validations}
			validateOnBlur={true}
			validateOnChange={true}
			validateOnMount={true}
		>
			{({ getFieldProps, isValid }) => {
				return (
					<Form>
						<h3>¿Qué quieres publicar hoy?</h3>
						<InputContainer>
							<textarea {...getFieldProps("message")} rows={4} />
							<button type="submit" disabled={!isValid}>
								Publicar
							</button>
						</InputContainer>
					</Form>
				);
			}}
		</Formik>
	);
};
