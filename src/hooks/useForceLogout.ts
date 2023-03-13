import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logoutAction } from "../redux/userDuck";
import { resetPostAction } from "../redux/postsDuck";

const UNAUTHORIZED_HTTP_STATUS = 401;

export const useForceLogout = () => {
	const dispatch = useDispatch();
	const logout = logoutAction(dispatch);
	const reset = resetPostAction(dispatch);

	const { statusCode } = useSelector((store: any) => {
		return {
			statusCode: store.posts.error?.status ?? 0,
		};
	});

	useEffect(() => {
		if (statusCode === UNAUTHORIZED_HTTP_STATUS) {
			reset();
			logout();
		}
	}, [statusCode]);
};
