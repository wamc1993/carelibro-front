import { Dispatch } from "redux";
import { Posts } from "../models/Posts";
import { Comment, NewComment } from "../models/Comments";
import {
	PostsState,
	PostsAction,
	POSTS_GET_INIT,
	POSTS_GET_ERROR,
	POSTS_GET_SUCCESS,
	POSTS_CREATE_INIT,
	POSTS_CREATE_ERROR,
	POSTS_CREATE_SUCCESS,
	POSTS_SELECT,
	POSTS_UNSELECT,
	COMMENTS_GET_INIT,
	COMMENTS_GET_SUCCESS,
	COMMENTS_GET_ERROR,
	COMMENTS_CREATE_ERROR,
	COMMENTS_CREATE_INIT,
	COMMENTS_CREATE_SUCCESS,
	POSTS_RESET,
} from "../models/PostsRedux";
import axiosInstance from "../api/instante";
import { adjustDateItem, adjustDateList } from "../utils/formatDate";

//Iniciales
export const initialState: PostsState = {
	posts: [],
	error: null,
	isFetching: false,
	selectedPost: null,
	comments: [],
	lastCommentCreationDate: new Date(),
};

//Reducer
const reducer = (
	state: PostsState = initialState,
	action: PostsAction
): PostsState => {
	switch (action.type) {
		case POSTS_GET_INIT:
		case POSTS_CREATE_INIT:
			return { ...state, error: null, isFetching: true };
		case POSTS_GET_ERROR:
		case POSTS_CREATE_ERROR:
			const { payload: error } = action;
			return { ...state, error, isFetching: false };
		case POSTS_GET_SUCCESS:
			const { payload } = action;
			return {
				...state,
				error: null,
				isFetching: false,
				posts: payload,
			};
		case POSTS_CREATE_SUCCESS:
			const { payload: newPost } = action;
			return {
				...state,
				error: null,
				isFetching: false,
				posts: [newPost, ...state.posts],
			};
		case POSTS_SELECT:
			const { payload: selectedPost } = action;
			return { ...state, selectedPost };
		case POSTS_UNSELECT:
			return { ...state, selectedPost: null };
		case COMMENTS_CREATE_INIT:
			return { ...state, error: null, isFetching: true };
		case COMMENTS_GET_ERROR:
		case COMMENTS_CREATE_ERROR:
			const { payload: commentEror } = action;
			return { ...state, error: commentEror, isFetching: false };
		case COMMENTS_GET_SUCCESS:
			const { payload: comments } = action;
			return {
				...state,
				error: null,
				isFetching: false,
				comments,
			};
		case COMMENTS_CREATE_SUCCESS:
			const { payload: newComment } = action;
			return {
				...state,
				error: null,
				isFetching: false,
				comments: [newComment, ...state.comments],
				lastCommentCreationDate: new Date(),
			};
		case POSTS_RESET:
			return {
				...state,
				error: null,
				isFetching: false,
				comments: [],
				posts: [],
				selectedPost: null,
			};
		default:
			return state;
	}
};

//Acciones
export const createPostAction = (dispatch: Dispatch<PostsAction>) => {
	return async (message: string) => {
		dispatch({
			type: POSTS_CREATE_INIT,
		});

		const newPost = {
			message,
		} as Posts;

		try {
			const res = await axiosInstance({
				url: "posts",
				method: "POST",
				data: newPost,
			});

			const processedData = adjustDateItem<Posts>(res.data);
			dispatch({
				type: POSTS_CREATE_SUCCESS,
				payload: processedData,
			});
		} catch (err: any) {
			dispatch({
				type: POSTS_CREATE_ERROR,
				payload: {
					message: err?.response?.message ?? "Error",
					status: err?.response?.status ?? 400,
				},
			});
		}
	};
};

export const getPostListAction = (dispatch: Dispatch<PostsAction>) => {
	return async () => {
		dispatch({
			type: POSTS_GET_INIT,
		});

		try {
			const res = await axiosInstance({
				url: "posts",
				method: "GET",
			});

			const processedData = adjustDateList<Posts>(res.data);

			dispatch({
				type: POSTS_GET_SUCCESS,
				payload: processedData,
			});
		} catch (err: any) {
			dispatch({
				type: POSTS_GET_ERROR,
				payload: {
					message: err?.response?.message ?? "Error",
					status: err?.response?.status ?? 400,
				},
			});
		}
	};
};

export const selectPostAction = (dispatch: Dispatch<PostsAction>) => {
	return (post: Posts) => {
		dispatch({
			type: POSTS_SELECT,
			payload: post,
		});
	};
};

export const unselectPostAction = (dispatch: Dispatch<PostsAction>) => {
	return () => {
		dispatch({
			type: POSTS_UNSELECT,
		});
	};
};

export const getCommentListAction = (dispatch: Dispatch<PostsAction>) => {
	return async (id: number) => {
		dispatch({
			type: COMMENTS_GET_INIT,
		});

		try {
			const res = await axiosInstance({
				url: `comments/${id}`,
				method: "GET",
			});

			const processedData = adjustDateList<Comment>(res.data);

			dispatch({
				type: COMMENTS_GET_SUCCESS,
				payload: processedData,
			});
		} catch (err: any) {
			dispatch({
				type: COMMENTS_GET_ERROR,
				payload: {
					message: err?.response?.message ?? "Error",
					status: err?.response?.status ?? 400,
				},
			});
		}
	};
};

export const createCommentAction = (dispatch: Dispatch<PostsAction>) => {
	return async (newComment: NewComment) => {
		dispatch({
			type: COMMENTS_CREATE_INIT,
		});

		try {
			const res = await axiosInstance({
				url: "comments",
				method: "POST",
				data: newComment,
			});

			const processedData = adjustDateItem<Comment>(res.data);
			dispatch({
				type: COMMENTS_CREATE_SUCCESS,
				payload: processedData,
			});
		} catch (err: any) {
			dispatch({
				type: COMMENTS_CREATE_ERROR,
				payload: {
					message: err?.response?.message ?? "Error",
					status: err?.response?.status ?? 400,
				},
			});
		}
	};
};

export const resetPostAction = (dispatch: Dispatch<PostsAction>) => {
	return () => {
		dispatch({
			type: POSTS_RESET,
		});
	};
};

export default reducer;
