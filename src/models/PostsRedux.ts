import { Posts } from "./Posts";
import { Comment } from "./Comments";

export const POSTS_GET_INIT = "POST_GET_INIT";
export const POSTS_GET_SUCCESS = "POST_GET_SUCCESS";
export const POSTS_GET_ERROR = "POST_GET_ERROR";
export const POSTS_CREATE_INIT = "POST_CREATE_INIT";
export const POSTS_CREATE_SUCCESS = "POST_CREATE_SUCCESS";
export const POSTS_CREATE_ERROR = "POST_CREATE_ERROR";
export const POSTS_SELECT = "POST_SELECT";
export const POSTS_UNSELECT = "POST_UNSELECT";
export const COMMENTS_GET_INIT = "COMMENTS_GET_INIT";
export const COMMENTS_GET_SUCCESS = "COMMENTS_GET_SUCCESS";
export const COMMENTS_GET_ERROR = "COMMENTS_GET_ERROR";
export const COMMENTS_CREATE_INIT = "COMMENTS_CREATE_INIT";
export const COMMENTS_CREATE_SUCCESS = "COMMENTS_CREATE_SUCCESS";
export const COMMENTS_CREATE_ERROR = "COMMENTS_CREATE_ERROR";
export const POSTS_RESET = "POSTS_RESET";

export interface ErrorApi {
	message: string;
	status: number;
}

export interface PostsState {
	isFetching: boolean;
	error: ErrorApi | null;
	posts: Posts[];
	selectedPost: Posts | null;
	comments: Comment[];
	lastCommentCreationDate: Date;
}

export interface PostActionGetInitAction {
	type: typeof POSTS_GET_INIT;
}

export interface PostActionGetErrorAction {
	type: typeof POSTS_GET_ERROR;
	payload: ErrorApi;
}

export interface PostActionGetSuccessAction {
	type: typeof POSTS_GET_SUCCESS;
	payload: any[];
}

export interface PostActionCreateInitAction {
	type: typeof POSTS_CREATE_INIT;
}

export interface PostActionCreateErrorAction {
	type: typeof POSTS_CREATE_ERROR;
	payload: ErrorApi;
}

export interface PostActionCreateSuccessAction {
	type: typeof POSTS_CREATE_SUCCESS;
	payload: Posts;
}

export interface PostActionSelectAction {
	type: typeof POSTS_SELECT;
	payload: Posts;
}

export interface PostActionUnselectAction {
	type: typeof POSTS_UNSELECT;
}

export interface CommentsActionGetInitAction {
	type: typeof COMMENTS_GET_INIT;
}

export interface CommentsActionGetErrorAction {
	type: typeof COMMENTS_GET_ERROR;
	payload: ErrorApi;
}

export interface CommentsActionGetSuccessAction {
	type: typeof COMMENTS_GET_SUCCESS;
	payload: Comment[];
}

export interface CommentsActionCreateInitAction {
	type: typeof COMMENTS_CREATE_INIT;
}

export interface CommentsActionCreateErrorAction {
	type: typeof COMMENTS_CREATE_ERROR;
	payload: ErrorApi;
}

export interface CommentsActionCreateSuccessAction {
	type: typeof COMMENTS_CREATE_SUCCESS;
	payload: Comment;
}

export interface PostActionResettAction {
	type: typeof POSTS_RESET;
}

export type PostsAction =
	| PostActionGetInitAction
	| PostActionGetErrorAction
	| PostActionGetSuccessAction
	| PostActionCreateInitAction
	| PostActionCreateErrorAction
	| PostActionCreateSuccessAction
	| PostActionSelectAction
	| PostActionUnselectAction
	| CommentsActionGetInitAction
	| CommentsActionGetErrorAction
	| CommentsActionGetSuccessAction
	| CommentsActionCreateInitAction
	| CommentsActionCreateErrorAction
	| CommentsActionCreateSuccessAction
	| PostActionResettAction;
