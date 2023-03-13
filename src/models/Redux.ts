import { User } from "./Users";

/**USERS */
export const USERS_SIGNUP_INIT = "USERS_SIGNUP_INIT";
export const USERS_SIGNUP_SUCCESS = "USERS_SIGNUP_SUCCESS";
export const USERS_SIGNUP_ERROR = "USERS_SIGNUP_ERROR";
export const USERS_LOGIN_INIT = "USERS_LOGIN_INIT";
export const USERS_LOGIN_SUCCESS = "USERS_LOGIN_SUCCESS";
export const USERS_LOGIN_ERROR = "USERS_LOGIN_ERROR";
export const USERS_LOGOUT = "USERS_LOGOUT";

export interface UsersState {
	loggedIn: boolean;
	isFetching: boolean;
	loginErrorMessage: string;
	user: User | null;
}

export interface UsersActionLoginInitAction {
	type: typeof USERS_LOGIN_INIT;
}

export interface UsersActionLoginErrorAction {
	type: typeof USERS_LOGIN_ERROR;
	payload: string;
}

export interface UsersActionLoginSuccessAction {
	type: typeof USERS_LOGIN_SUCCESS;
	payload: User;
}

export interface UsersActionSignupInitAction {
	type: typeof USERS_SIGNUP_INIT;
}

export interface UsersActionSignupErrorAction {
	type: typeof USERS_SIGNUP_ERROR;
	payload: string;
}

export interface UsersActionSignupSuccessAction {
	type: typeof USERS_SIGNUP_SUCCESS;
	payload: User;
}

export interface UsersActionLogoutInitAction {
	type: typeof USERS_LOGOUT;
}

export type UsersAction =
	| UsersActionLoginInitAction
	| UsersActionLoginErrorAction
	| UsersActionLoginSuccessAction
	| UsersActionSignupInitAction
	| UsersActionSignupErrorAction
	| UsersActionSignupSuccessAction
	| UsersActionLogoutInitAction;
