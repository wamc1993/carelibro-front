import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { logoutAction } from "../redux/userDuck";
import { createPostAction, getPostListAction } from "../redux/postsDuck";
import { useForceLogout } from "./useForceLogout";

export const useHomePage = () => {
	const dispatch = useDispatch();

	const logout = logoutAction(dispatch);
	const createPost = createPostAction(dispatch);
	const getPostList = getPostListAction(dispatch);

	const { posts } = useSelector((store: any) => {
		return {
			posts: store.posts.posts,
			isFetching: store.posts.isFetching,
		};
	});

	useForceLogout();

	useEffect(() => {
		const fn = async () => {
			await getPostList();
		};
		fn().catch(console.error);
	}, []);

	return { logout, createPost, posts };
};
