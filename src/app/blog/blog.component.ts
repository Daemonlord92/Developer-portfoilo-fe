import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	loading: boolean = false;
	items;
	errorMessage;

	constructor(private client:HttpClient) {}
	public getProject() {
		this.loading = true;
		this.errorMessage = "";
		this.client.get<any>('http://localhost:4000/api/blog')
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
