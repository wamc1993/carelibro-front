import { usePostList } from "../../hooks";

import { PostPreview } from "../postPreview";
import { Container } from "./styles";

export const PostList: React.FC = () => {
	const { posts } = usePostList();

	return (
		<Container>
			<h3>Posts realizados</h3>
			{posts?.length ? (
				posts.map((item) => (
					<PostPreview key={item.id} item={item} withRedirect />
				))
			) : (
				<p>No hay nuevos posts por ahora</p>
			)}
		</Container>
	);
};
