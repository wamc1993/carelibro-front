import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Posts } from "../models/Posts";
import { Comment } from "../models/Comments";
import { useForceLogout } from "./useForceLogout";
import { getCommentListAction } from "../redux/postsDuck";

export const useCommentList = (): {
	comments: Comment[];
	selectedPost: Posts;
	unselectPost: () => void;
} => {
	const dispatch = useDispatch();
	const getCommentList = getCommentListAction(dispatch);

	const { selectedPost, comments, lastDate } = useSelector((store: any) => {
		return {
			selectedPost: store?.posts?.selectedPost,
			comments: store.posts.comments,
			lastDate: store.posts.lastCommentCreationDate,
		};
	});

	useEffect(() => {
		if (selectedPost?.id) {
			const fetch = async () => {
				await getCommentList(selectedPost?.id);
			};
			fetch().catch(console.error);
		}
	}, [selectedPost, lastDate]);

	useForceLogout();

	return { selectedPost, comments };
};
