import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Movie } from '../../_commons/models/movies';
import { Comment, PostComment } from '../../_commons/models/comments';
import { ApiService } from '../../_commons/services/api.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {
	private SB_DURATION: number = 2000;

	public id!: string;
	public rate: number = 5;
	public text: string = '';
	public movie: Movie | undefined;
	public showComment: boolean = false;

	constructor(
		private readonly _sb: MatSnackBar,
		private readonly route: ActivatedRoute,
		private readonly api: ApiService
	) {}

	public async ngOnInit(): Promise<void> {
		this.id = this.route.snapshot.paramMap.get('id') || '';

		if(this.id)
			this.movie = await this.api.getMovieById(this.id);
	}

	public open(lnk: string): void {
		window.open(lnk);
	}

	public openIMDBPage(id: string): void {
		window.open(`https://www.imdb.com/title/${id}`);
	}

	public async postComment(rate: number, text: string): Promise<void> {
		let comment: PostComment = { rating: rate, text: text };

		if(!comment.text)
			return;

		try {
			let res: Comment | undefined = await this.api.postCommentOnMovieById(this.id, comment);

			if(res) {
				this.rate = 5;
				this.text = '';
				this.showComment = false;
				this.movie = await this.api.getMovieById(this.id);
				this._sb.open('Comment successfully posted !', 'Ok', { duration: this.SB_DURATION });
			}
		}

		catch (err) {
			this._sb.open('Something went wrong', 'Ok', { duration: this.SB_DURATION });
			console.error(err);
		}
	}
}
