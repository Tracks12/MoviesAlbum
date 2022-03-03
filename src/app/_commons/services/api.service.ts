import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Movie } from '../models/movies';

@Injectable({
	providedIn: 'root'
})

export class ApiService {
	private API_URL: string = 'https://movie-api.benoithubert.me';

	private API_ROUTES: any = {
		movies: 'movies'
	}

	public headers: any = {
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

	public async postCommentOnMovieById(id: string, comment: string): Promise<any> {
		return this.http
			.post<any>(`${this.API_URL}/${this.API_ROUTES.movies}/${id}`, comment, { headers: this.headers })
			.toPromise();
	}
}
