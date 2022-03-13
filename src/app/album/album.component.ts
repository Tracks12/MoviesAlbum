import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Genres, Genre } from '../_commons/models/genres';
import { ASSETS_PATH } from '../_commons/constants';

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})

export class AlbumComponent {
	public isHandset$: Observable<boolean> = this._bpo.observe(Breakpoints.Handset).pipe(
		map(result => result.matches),
		shareReplay()
	);

	public assetsPath: string = ASSETS_PATH;
	public genres: Genre[] = Genres;
	public selectedGenre!: string | null;

	constructor(
		private readonly _bpo: BreakpointObserver,
		private readonly _r: ActivatedRoute,
	) {}

	public ngOnInit(): void {
		this._r.children[0].params.subscribe(() => {
			let id: string | null = this._r.children[0].snapshot.paramMap.get('id');
			this.selectedGenre = id ? id : 'all';
		});
	}
}
