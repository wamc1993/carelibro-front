import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Posts } from "../models/Posts";
import { useForceLogout } from "./useForceLogout";
import { getPostListAction } from "../redux/postsDuck";

export const usePostList = (): { posts: Posts[] } => {
	const dispatch = useDispatch();
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

	return { posts };
};
