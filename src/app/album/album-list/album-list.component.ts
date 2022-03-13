import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Genre } from '../../_commons/models/genres';
import { Movie } from '../../_commons/models/movies';
import { ApiService } from '../../_commons/services/api.service';
import { SB_DURATION, SB_OK } from '../../_commons/constants';

@Component({
	selector: 'app-album-list',
	templateUrl: './album-list.component.html',
	styleUrls: ['./album-list.component.scss']
})

export class AlbumListComponent implements OnInit {
	public allMovies: Movie[] | undefined;
	public movies: Movie[] | undefined;

	constructor(
		private readonly _sb: MatSnackBar,
		private readonly _r: ActivatedRoute,
		private readonly api: ApiService
	) {}

	public updateList(name?: string): void {
		let id: string | null = this._r.snapshot.paramMap.get('id');

		this.movies = this.allMovies;

		if(id)
			this.movies = this.movies?.filter((m: Movie) => m.genres.filter((g: Genre) => g.id === parseInt(id ? id : '0')).length);

		if(name)
			this.movies = this.movies?.filter((m: Movie) => m.title.toLowerCase().includes(name));
	}

	public async ngOnInit(): Promise<void> {
		try {
			this.allMovies = await this.api.getMovies();
			this.movies = this.allMovies;
		}

		catch(err) {
			this._sb.open('We can\'t retrieve the list of films', SB_OK, { duration: SB_DURATION });
			console.error(err);
		}

		this._r.params.subscribe(() => this.updateList());
	}
}
