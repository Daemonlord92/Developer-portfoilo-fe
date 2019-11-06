export class Project {
	
	constructor(
		public id?: number,
		public portfolio_title?: string,
		public github_url: string = 'https://',
		public heroku_url: string = 'http://',
		public tools?: string,
		public img_url?: string,

		) { }
}