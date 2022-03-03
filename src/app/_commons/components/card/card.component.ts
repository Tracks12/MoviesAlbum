import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movies';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
	@Input() public movie!: Movie;

	constructor() {}

	ngOnInit(): void {

	}
}
