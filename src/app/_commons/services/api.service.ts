import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/movies';
import { PostComment, PostCommentResponse } from '../models/comments';

@Injectable({
	providedIn: 'root'
})

export class ApiService {
	private API_URL: string = 'https://movie-api.benoithubert.me';

	private API_ROUTES: { movies: string, comments: string } = {
		movies: 'movies',
		comments: 'comments'
	}

	public headers: { "Content-Type": string } = {
		"Content-Type": "application/json; charset=utf-8",
	}

	constructor(
		private http: HttpClient
	) {}

	public async getMovies(): Promise<Movie[] | undefined> {
		return this.http
			.get<Movie[]>(`${this.API_URL}/${this.API_ROUTES.movies}`, { headers: this.headers })
			.toPromise();
	}

	public async getMovieById(id: string): Promise<Movie | undefined> {
		return this.http
			.get<Movie>(`${this.API_URL}/${this.API_ROUTES.movies}/${id}`, { headers: this.headers })
			.toPromise();
	}

	public async postCommentOnMovieById(id: string, comment: PostComment): Promise<PostCommentResponse | undefined> {
		return this.http
			.post<PostCommentResponse>(`${this.API_URL}/${this.API_ROUTES.movies}/${id}/${this.API_ROUTES.comments}`, comment, { headers: this.headers })
			.toPromise();
	}
}
