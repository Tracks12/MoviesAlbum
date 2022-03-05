import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Movie } from '../../_commons/models/movies';
import { ApiService } from '../../_commons/services/api.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
	public movie: Movie | undefined;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly api: ApiService
	) {}

	public async ngOnInit(): Promise<void> {
		let id: string | null = this.route.snapshot.paramMap.get('id');

		if(id)
			this.movie = await this.api.getMovieById(id);
	}
}
