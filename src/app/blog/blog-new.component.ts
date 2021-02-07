import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog';

@Component({
	selector: 'app-blog-new',
	templateUrl: 'blog-new.component.html'
})
export class BlogNewComponent implements OnInit {	
	blog = new Blog;

	loading: boolean = false;
	items;
	errorMessage;

	constructor(private client:HttpClient) {}
	public postBlogPost() {
		this.loading = true;
		this.errorMessage = "";
		this.client.post<Blog>('http://localhost:4000/api/blog', this.blog)
		.subscribe( (res) => {
			console.log(res);
		}, 
		(error) => {
			console.error('Request failed with error')
					this.errorMessage = error;
					this.loading = false;
		})
	}

	pageOfItems: Array<any>;

	ngOnInit() {
		this.postBlogPost();
	}
}