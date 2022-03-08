import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements OnInit {
	@Output() public search = new EventEmitter<string>();

	constructor() {}

	public ngOnInit(): void {}

	public onSearchChange(value: string): void {
		this.search.emit(value);
	}
}
