import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
	blogOne: Blog = new Blog(1, 'Testing data regular', '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')
	blogTwo: Blog = new Blog(2, 'Testing short data', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
	blogThree: Blog = new Blog(3, 'Testing long data', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac nisi at sem pellentesque venenatis at quis velit. In et purus vitae ex placerat hendrerit nec eget enim. Vestibulum eros neque, rhoncus ut maximus id, venenatis non augue.')
	blogFour: Blog = new Blog(4, 'Filler', 'Integer mattis ut ex id tempus. In eget ligula eget lorem faucibus lobortis. Maecenas interdum, lorem sit amet tempus placerat, augue risus lobortis metus, eget scelerisque nibh tortor sit amet justo. Nunc finibus auctor metus quis mollis. Nulla sed turpis mauris. Nulla aliquet ante a nisl ultricies, eu commodo nunc lacinia. Sed euismod arcu vitae leo fermentum, quis pretium neque ultrices. Donec lacus nisl, lobortis sed enim ac, vestibulum placerat leo.')
	blogFive: Blog = new Blog(5, 'Filler', 'Sed fringilla porttitor dictum. Suspendisse in nisl eget mauris pharetra viverra vel in nibh. Cras bibendum leo at elementum rhoncus. Fusce vel aliquam sem, non ultrices sapien. Curabitur vitae orci nec orci rutrum porta. Proin pellentesque nibh quis posuere mollis. Maecenas id tortor vitae elit rhoncus dignissim.')
	blogSix: Blog = new Blog(6, 'Filler', 'Integer id fringilla lectus. Nulla viverra eros non justo vestibulum, pellentesque tincidunt nisl lacinia. Integer interdum finibus orci ut euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.')
	blogSeven: Blog = new Blog( 7, ' FIller', 'Integer id fringilla lectus. Nulla viverra eros non justo vestibulum, pellentesque tincidunt nisl lacinia. Integer interdum finibus orci ut euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.')
	blogEight: Blog = new Blog( 8, 'Filler', 'Integer id fringilla lectus. Nulla viverra eros non justo vestibulum, pellentesque tincidunt nisl lacinia. Integer interdum finibus orci ut euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.')
	blogNine: Blog = new Blog( 9, 'Filler', 'Integer id fringilla lectus. Nulla viverra eros non justo vestibulum, pellentesque tincidunt nisl lacinia. Integer interdum finibus orci ut euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.')
	blogTen: Blog = new Blog( 10, 'Filler', 'Integer id fringilla lectus. Nulla viverra eros non justo vestibulum, pellentesque tincidunt nisl lacinia. Integer interdum finibus orci ut euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.')
	blogEleven: Blog = new Blog( 11, 'Filler', 'Integer id fringilla lectus. Nulla viverra eros non justo vestibulum, pellentesque tincidunt nisl lacinia. Integer interdum finibus orci ut euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ut accumsan augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.')

	blogs: Blog[] = [
	this.blogOne,
	this.blogTwo,
	this.blogThree,
	this.blogFour,
	this.blogFive,
	this.blogSix,
	this.blogSeven,
	this.blogEight,
	this.blogNine,
	this.blogTen,
	this.blogEleven,
	]

	items = this.blogs;
	pageOfItems: Array<any>;

  ngOnInit() {
  	this.items = this.blogs;
  }

  onChangePage(pageOfItems: Array<any>) {
  	this.pageOfItems = pageOfItems;
  }
}
