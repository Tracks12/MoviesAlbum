import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Genres, Genre } from '../_commons/models/genres';

@Component({
	selector: 'app-album',
	templateUrl: './album.component.html',
	styleUrls: ['./album.component.scss']
})

export class AlbumComponent {
	public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(result => result.matches),
		shareReplay()
	);

	public assetsPath: string = '/assets';
	public genres: Genre[] = Genres;

	constructor(
		private breakpointObserver: BreakpointObserver
	) {}

	public ngOnInit(): void {}
}
