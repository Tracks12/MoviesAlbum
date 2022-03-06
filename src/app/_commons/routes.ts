import { Routes } from '@angular/router';

import { AlbumComponent } from '../album/album.component';
import { AlbumListComponent } from '../album/album-list/album-list.component';
import { DetailsComponent } from '../album/details/details.component';
import { ErrorComponent } from '../error/error.component';

export const ROUTES: Routes = [
	{ path: "", component: AlbumComponent, children: [
		{ path: "", component: AlbumListComponent },
		{ path: ":id", component: AlbumListComponent },
		{ path: "detail/:id", component: DetailsComponent }
	]},
	{ path: "**", component: ErrorComponent }
];
