import { Component } from '@angular/core';
import { Blog } from './blog';

@Component({
	selector: 'app-blog-new',
	templateUrl: 'blog-new.component.html'
})
export class BlogNewComponent {	
	blog = new Blog;
}