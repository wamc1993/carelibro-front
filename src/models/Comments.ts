export interface Author {
	firstName: string;
	lastName: string;
	email: string;
}

export interface Comment {
	id: number;
	postId: number;
	authorId: number;
	message: string;
	fatherId: number | null;
	isActive: number;
	createdAt: Date;
	updatedAt: Date;
	children: Comment[];
	author?: Author;
}

export interface NewComment {
	postId: number;
	message: string;
	fatherId?: number;
}
