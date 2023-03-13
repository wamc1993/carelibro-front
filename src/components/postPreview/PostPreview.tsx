import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Posts } from "../../models/Posts";
import { getTimeAgo } from "../../utils/formatDate";
import { selectPostAction } from "../../redux/postsDuck";
import { sayCountComments } from "../../utils/sayCountComments";
import { Container } from "./styles";

export interface PostPrevieProps {
	item: Posts;
	withRedirect: boolean;
}

export const PostPreview: React.FC<PostPrevieProps> = ({
	item,
	withRedirect = true,
}: PostPrevieProps) => {
	const {
		message,
		createdAt,
		relatedCommentsCount,
		author: { firstName, lastName } = {},
	} = item;

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const selectPost = selectPostAction(dispatch);

	const endText = `${sayCountComments(
		relatedCommentsCount
	)} | publicado ${getTimeAgo(createdAt)}`;

	const handleOnSelect = () => {
		if (withRedirect) {
			selectPost(item);
			navigate("/post");
		}
	};

	return (
		<Container selectable={withRedirect}>
			<p className="author">{`${firstName} ${lastName}:`}</p>
			<p>{message}</p>
			<a className="date" onClick={handleOnSelect}>
				{endText}
			</a>
		</Container>
	);
};
