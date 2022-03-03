import { Component, OnInit } from '@angular/core';

import { Movie } from '../../_commons/models/movies';
import { ApiService } from '../../_commons/services/api.service';

@Component({
	selector: 'app-album-list',
	templateUrl: './album-list.component.html',
	styleUrls: ['./album-list.component.scss']
})

export class AlbumListComponent implements OnInit {
	public movies: Movie[] | undefined;

	constructor(
		private readonly api: ApiService
	) {}

	public async ngOnInit(): Promise<void> {
		this.movies = await this.api.getMovies();
	}
}
