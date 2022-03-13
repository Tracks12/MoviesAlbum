import { Component, OnInit, Input } from '@angular/core';

import { Comment } from '../../models/comments';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {
	@Input() public comment!: Comment;

	constructor() {}

	ngOnInit(): void {}
}
