import React from "react";
import { Header } from "../components/header";
import { PostList } from "../components/postList";
import { Container } from "../components/container";
import { NewPostForm } from "../components/newPostForm";

const HomePage: React.FC = () => {
	return (
		<Container>
			<Header />
			<NewPostForm />
			<PostList />
		</Container>
	);
};

export default HomePage;
