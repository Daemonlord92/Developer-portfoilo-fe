import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	loading: boolean = false;
	items;
	errorMessage;

	constructor(private client:HttpClient) {}
	public getProject() {
		this.loading = true;
		this.errorMessage = "";
		this.client.get<any>('http://localhost:4000/api/project')
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
  	this.getProject();
  }

  onChangePage(pageOfItems: Array<any>) {
  	this.pageOfItems = pageOfItems;
  }
}
