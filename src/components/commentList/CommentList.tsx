import { Container } from "./styles";

import { CommentPreview } from "../commentPreview";
import { Posts } from "../../models/Posts";
import { Comment } from "../../models/Comments";

export interface CommentListProps {
	selectedPost: Posts;
	comments: Comment[];
	father?: Comment;
}

export const CommentList: React.FC<CommentListProps> = ({
	father,
	comments,
	selectedPost,
}: CommentListProps) => {
	return (
		<Container withScroll={!father?.id}>
			{comments?.length ? (
				comments.map((item) => (
					<CommentPreview
						item={item}
						key={item.id}
						father={father}
						selectedPost={selectedPost}
					/>
				))
			) : (
				<p className="no-comments">
					No hay nuevos comentarios por ahora
				</p>
			)}
		</Container>
	);
};
