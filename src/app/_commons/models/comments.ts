export interface Comment {
	id: number;
	movieId: number;
	text: string;
	rating: string;
	date: Date;
};

export interface PostComment {
	rating: number;
	text: string;
};

export interface PostCommentResponse {
	id: number;
	movieId: number;
	text: string;
	rating: number;
	date: Date;
};
