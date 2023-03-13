import React from "react";
import { useField } from "formik";

import { ErrorMessage, InputContainer } from "./styles";

export interface FormInputProp
	extends React.InputHTMLAttributes<HTMLInputElement> {
	type: string;
	name: string;
	label?: string;
}

export const FormInput: React.FC<FormInputProp> = ({ label, ...props }) => {
	const { name, type, id } = props;
	const [field, meta] = useField({ name, type });

	const error = meta.touched && meta.error ? meta.error : "";

	return (
		<InputContainer>
			<label htmlFor={id || name}>{label}</label>
			<input {...props} {...field} />
			<ErrorMessage>{error}</ErrorMessage>
		</InputContainer>
	);
};
