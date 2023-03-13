import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";

import { Posts } from "../../models/Posts";
import { NewComment } from "../../models/Comments";
import { createCommentAction } from "../../redux/postsDuck";

import validations from "./validations";
import { Container, InputContainer } from "./styles";

interface NewCommentFormProps {
	label?: string;
	fatherId?: number;
	selectedPost: Posts;
	onCancel?: () => void;
	onCreate?: () => void;
	className?: string;
}

interface NewPostState {
	message: string;
}

const initialValues = {
	message: "",
};

export const NewCommentForm = ({
	label,
	fatherId,
	onCancel,
	onCreate,
	selectedPost,
	className = "",
}: NewCommentFormProps) => {
	const dispatch = useDispatch();
	const createComment = createCommentAction(dispatch);

	const handleOnSubmit = async (
		{ message }: NewPostState,
		{ resetForm }: any
	) => {
		const newComment: NewComment = {
			fatherId,
			postId: selectedPost.id!,
			message,
		};
		onCreate?.();
		resetForm?.();
		await createComment(newComment);
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
					<Container className={className}>
						{label ? <p>{label}</p> : null}
						<Form className="form">
							<InputContainer>
								<textarea
									{...getFieldProps("message")}
									rows={4}
								/>
								<div>
									{onCancel && (
										<button
											type="button"
											onClick={onCancel}
										>
											Cancelar
										</button>
									)}
									<button type="submit" disabled={!isValid}>
										Responder
									</button>
								</div>
							</InputContainer>
						</Form>
					</Container>
				);
			}}
		</Formik>
	);
};
