import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { AlbumComponent } from './album/album.component';
import { CardComponent } from './_commons/components/card/card.component';
import { DetailsComponent } from './album/details/details.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { SearchBarComponent } from './_commons/components/search-bar/search-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		ErrorComponent,
		AlbumComponent,
		CardComponent,
		DetailsComponent,
		AlbumListComponent,
		SearchBarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		LayoutModule,
		MatCardModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatInputModule,
		MatFormFieldModule,
		MatSliderModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
