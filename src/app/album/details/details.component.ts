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
	private id!: string | null;
	public movie: Movie | undefined;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly api: ApiService
	) {}

	public async ngOnInit(): Promise<void> {
		this.id = this.route.snapshot.paramMap.get('id');

		if(this.id)
			this.movie = await this.api.getMovieById(this.id);
	}
}
