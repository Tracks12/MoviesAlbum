import { Component, OnInit } from '@angular/core';

import { ASSETS_PATH } from '../_commons/constants';

@Component({
	selector: 'app-error',
	templateUrl: './error.component.html',
	styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {
	public assetsPath: string = `${ASSETS_PATH}/404`;

	constructor() {}

	public ngOnInit(): void {}
}
