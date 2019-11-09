import { Component, OnInit } from '@angular/core';
import { BugTracker } from './bug-tracker';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {

	bugOne: BugTracker = new BugTracker( 1, 'Creating test data to work with on bug-tracker', 'github.com/Daemonlord92/Developer-portfoilo-fe','Angular, Ruby on Rails' )

	bugTwo: BugTracker = new BugTracker( 2, 'working on bootstrap design', 'github.com/Daemonlord92/Developer-portfoilo-fe','Angular, Ruby on Rails' )

	bugThree: BugTracker = new BugTracker( 3, 'Begin to work on the homepage', 'github.com/Daemonlord92/Developer-portfoilo-fe','Angular, Ruby on Rails' )

	bugFour: BugTracker = new BugTracker( 4, 'Setup Project page and testing data', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails' )

	bugFive: BugTracker = new BugTracker( 5, 'Setup blog page and testing', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')

	bugSix: BugTracker = new BugTracker( 6, 'Setup the contact page, and using the homepage outline to setup about me page', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')

	bugSeven: BugTracker = new BugTracker( 7, 'Fixed a Compile error on the Bug[], changed to BugTracker[]', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')

	bugEight: BugTracker = new BugTracker( 8, 'Working on about me Page', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')

	bugNine: BugTracker = new BugTracker( 9, 'Adding a form to bug tracker to add bugs', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')

	bugTen: BugTracker = new BugTracker( 10, 'Create a form for BlogNewComponent and create BlogNewComponent', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')

	bugEleven: BugTracker = new BugTracker( 11, 'Working on Pagination for BugTrackerComponent using jw-angular-pagination', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')
	bugTwelve: BugTracker = new BugTracker( 12, "Impletementing Pagination for blog post", "github.com/Daemonlord92/Developerportfoilo-fe", 'Angular, Ruby on Rails')

	
	bugs: BugTracker[] = [
	this.bugOne,
	this.bugTwo,
	this.bugThree,
	this.bugFour,
	this.bugFive,
	this.bugSix,
	this.bugSeven,
	this.bugEight,
	this.bugNine,
	this.bugTen,
	this.bugEleven,
	this.bugTwelve,
	]

  items = this.bugs;
	pageOfItems: Array<any>;

  ngOnInit() {
  	this.items = this.bugs;
  }

  onChangePage(pageOfItems: Array<any>) {
  	this.pageOfItems = pageOfItems;
  }

}
