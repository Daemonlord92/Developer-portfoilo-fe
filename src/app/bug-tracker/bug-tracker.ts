export class BugTracker {
	constructor(
		public id?: number,
		public issue?: string,
		public github_url: string = 'http://',
		public tools?: string,
		) {}
}