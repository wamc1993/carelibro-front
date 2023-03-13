import { Dispatch } from "redux";

import {
	UsersState,
	UsersAction,
	USERS_LOGIN_ERROR,
	USERS_LOGIN_INIT,
	USERS_LOGIN_SUCCESS,
	USERS_SIGNUP_ERROR,
	USERS_SIGNUP_INIT,
	USERS_SIGNUP_SUCCESS,
	USERS_LOGOUT,
} from "../models/Redux";
import { User } from "../models/Users";
import axiosInstance, { saveTokenOnLocal } from "../api/instante";
import { clearState } from "./getPersistedStore";

//Iniciales
export const initialState: UsersState = {
	loggedIn: false,
	isFetching: false,
	loginErrorMessage: "",
	user: null,
};

//Reducer
const reducer = (
	state: UsersState = initialState,
	action: UsersAction
): UsersState => {
	switch (action.type) {
		case USERS_LOGIN_INIT:
		case USERS_SIGNUP_INIT:
			return {
				...state,
				loggedIn: false,
				isFetching: true,
				loginErrorMessage: "",
			};
		case USERS_LOGIN_ERROR:
		case USERS_SIGNUP_ERROR:
			return {
				...state,
				isFetching: false,
				loggedIn: false,
				user: null,
				loginErrorMessage: action.payload,
			};
		case USERS_LOGIN_SUCCESS:
		case USERS_SIGNUP_SUCCESS:
			return {
				...state,
				isFetching: false,
				loggedIn: true,
				user: action.payload,
				loginErrorMessage: "",
			};
		case USERS_LOGOUT:
			return {
				...state,
				isFetching: false,
				loggedIn: false,
				user: null,
				loginErrorMessage: "",
			};
		default:
			return state;
	}
};
export default reducer;

//Acciones
export const loginAction = (dispatch: Dispatch<UsersAction>) => {
	return async (username: string, password: string) => {
		dispatch({
			type: USERS_LOGIN_INIT,
		});

		const data = { username, password };

		try {
			const {
				data: { accessToken, user },
			} = await axiosInstance({
				url: "auth/login",
				method: "POST",
				data,
			});

			saveTokenOnLocal(accessToken);

			dispatch({
				type: USERS_LOGIN_SUCCESS,
				payload: user,
			});
		} catch (err: any) {
			console.log("errrror", err);

			dispatch({
				type: USERS_LOGIN_ERROR,
				payload: err?.response?.message ?? "Error",
			});
		}
	};
};

export const signupAction = (dispatch: Dispatch<UsersAction>) => {
	return async (data: User) => {
		dispatch({
			type: USERS_SIGNUP_INIT,
		});

		try {
			const {
				data: { accessToken, user },
			} = await axiosInstance({
				url: "auth/signup",
				method: "POST",
				data,
			});

			saveTokenOnLocal(accessToken);

			dispatch({
				type: USERS_SIGNUP_SUCCESS,
				payload: user,
			});
		} catch (err: any) {
			console.log("errrror", err);

			dispatch({
				type: USERS_SIGNUP_ERROR,
				payload: err?.response?.message ?? "Error",
			});
		}
	};
};

export const logoutAction = (dispatch: Dispatch<UsersAction>) => {
	return () => {
		dispatch({
			type: USERS_LOGOUT,
		});
		clearState();
	};
};
