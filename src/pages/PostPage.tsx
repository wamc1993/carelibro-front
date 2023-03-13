import React from "react";

import { Header } from "../components/header";
import { Separator } from "../components/separator";
import { Container } from "../components/container";
import { PostPreview } from "../components/postPreview";
import { CommentList } from "../components/commentList";
import { NewCommentForm } from "../components/newCommentForm";

import { useCommentList } from "../hooks";

const PostPage: React.FC = () => {
	const { selectedPost, comments } = useCommentList();

	return (
		<Container>
			<Header toComeBack />
			<PostPreview item={selectedPost} withRedirect={false} />
			<Separator />
			<CommentList selectedPost={selectedPost} comments={comments} />
			<NewCommentForm
				selectedPost={selectedPost}
				label={"Responde algo!"}
			/>
		</Container>
	);
};

export default PostPage;
