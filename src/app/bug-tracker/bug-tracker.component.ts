import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BugTrackerService } from './bug-tracker.service';
import { BugTracker } from './bug-tracker';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {
	
	 private bugs:any = [];

	loading: boolean = false;
	items;
	errorMessage;

	constructor(private client:HttpClient) {}
	public getBugTracker() {
		this.loading = true;
		this.errorMessage = "";
		this.client.get<any>('http://localhost:4000/api/bugtracker')
			.subscribe(
				(res) => {
					console.log('response recevived', res)
					this.items = res;
					console.log(this.items)
				},
				(error) => {
					console.error('Request failed with error')
					this.errorMessage = error;
					this.loading = false;
				},
				() => {
					console.error('Request Completed')
					this.loading = false;
				})
			
	}

	

	pageOfItems: Array<any>;

  ngOnInit() {
  	this.getBugTracker();
  	console.log(this.items)
  }

  onChangePage(pageOfItems: Array<any>) {
  	this.pageOfItems = pageOfItems;
  }

}
