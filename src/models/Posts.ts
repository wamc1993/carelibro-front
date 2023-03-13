export interface Posts {
	id?: number;
	authorId?: number;
	message: string;
	createdAt: Date;
	updatedAt: Date;
	relatedCommentsCount?: number;
	author?: {
		firstName: string;
		lastName: string;
		email: string;
	};
}
