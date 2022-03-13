import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movies';

@Component({
	selector: 'app-poster',
	templateUrl: './poster.component.html',
	styleUrls: ['./poster.component.scss']
})

export class PosterComponent implements OnInit {
	@Input() public movie!: Movie;

	constructor() {}

	public ngOnInit(): void {}
}
