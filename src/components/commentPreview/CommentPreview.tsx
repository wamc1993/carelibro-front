import { useState } from "react";

import { Comment } from "../../models/Comments";
import { Posts } from "../../models/Posts";
import { getTimeAgo } from "../../utils/formatDate";
import { Container } from "./styles";
import { NewCommentForm } from "../newCommentForm";
import { CommentList } from "../commentList";

export interface CommentPreviewProps {
	item: Comment;
	father?: Comment;
	selectedPost: Posts;
}

export const CommentPreview: React.FC<CommentPreviewProps> = ({
	item,
	father,
	selectedPost,
}: CommentPreviewProps) => {
	const [show, setshow] = useState<boolean>(false);

	const withFather: boolean = !!father;

	const { message, createdAt, author: { firstName, lastName } = {} } = item;

	const endText = `${!withFather ? "responder |" : ""} publicado ${getTimeAgo(
		createdAt
	)}`;

	const handleOnShow = () => {
		setshow(true);
	};

	const hide = () => {
		setshow(false);
	};

	return (
		<Container clickeable={!withFather}>
			<p className="author">{`${firstName} ${lastName}:`}</p>
			<p>{message}</p>
			<a className="date" onClick={handleOnShow}>
				{endText}
			</a>
			<div className="left-padding">
				{item.children?.length ? (
					<CommentList
						selectedPost={selectedPost}
						comments={item.children}
						father={item}
					/>
				) : null}
				{show && !father?.id && (
					<NewCommentForm
						fatherId={item.id}
						onCancel={hide}
						onCreate={hide}
						selectedPost={selectedPost}
						className="mt"
					/>
				)}
			</div>
		</Container>
	);
};
