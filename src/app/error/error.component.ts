import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {
	public assetsPath: string = "/assets/404";
	public indexPath: string = "/";

	constructor() {}

	public ngOnInit(): void {

	}
}
