import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugTracker } from './bug-tracker';

@Component({
	selector: 'app-bug-tracker-new',
	templateUrl: 'bug-tracker-new.component.html'
})
export class BugTrackerNewComponent implements OnInit {	
	bugtracker = new BugTracker;

	loading: boolean = false;
	items;
	errorMessage;

	constructor(private client:HttpClient) {}

	public postBugIssue() {
		this.loading = true;
		this.errorMessage = "";
		this.client.post<BugTracker>('http://localhost:4000/api/bugtracker', this.bugtracker)
		.subscribe( (res) => {
			console.log(res);
		},
		(error) => {
			this.errorMessage = error;
			this.loading = false;
		})
	}

	ngOnInit() {
		this.postBugIssue();
	}
}
