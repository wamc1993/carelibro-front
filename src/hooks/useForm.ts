import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {
	const [data, setData] = useState(initialState);

	const onChange = (
		ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const { target: { value = "", name = "" } = {} } = ev || {};

		setData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const reset = () => {
		setData({
			...initialState,
		});
	};

	const isValidEmail = (email: string) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	return {
		...data,
		reset,
		onChange,
		isValidEmail,
	};
};
