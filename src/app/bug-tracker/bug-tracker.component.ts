import { Component, OnInit } from '@angular/core';
import { BugTracker } from './bug-tracker';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent implements OnInit {

	bugOne: BugTracker = new BugTracker( 1, 'Creating test data to work with on bug-tracker', 'https://github.com/Daemonlord92/Developer-portfoilo-fe','Angular' )

	bugTwo: BugTracker = new BugTracker( 2, 'working on bootstrap design', 'https://github.com/Daemonlord92/Developer-portfoilo-fe','Angular' )

	bugThree: BugTracker = new BugTracker( 3, 'Begin to work on the homepage', 'https://github.com/Daemonlord92/Developer-portfoilo-fe','Angular' )

	bugFour: BugTracker = new BugTracker( 4, 'Setup Project page and testing data', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular' )

	bugFive: BugTracker = new BugTracker( 5, 'Setup blog page and testing', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugSix: BugTracker = new BugTracker( 6, 'Setup the contact page, and using the homepage outline to setup about me page', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugSeven: BugTracker = new BugTracker( 7, 'Fixed a Compile error on the Bug[], changed to BugTracker[]', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugEight: BugTracker = new BugTracker( 8, 'Working on about me Page', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugNine: BugTracker = new BugTracker( 9, 'Adding a form to bug tracker to add bugs', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugTen: BugTracker = new BugTracker( 10, 'Create a form for BlogNewComponent and create BlogNewComponent', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugEleven: BugTracker = new BugTracker( 11, 'Working on Pagination for BugTrackerComponent using jw-angular-pagination', 'https://github.com/Daemonlord92/Developerportfoilo-fe', 'Angular')

	bugTwelve: BugTracker = new BugTracker( 12, "Impletementing Pagination for blog post", "https://github.com/Daemonlord92/Developerportfoilo-fe", 'Angular')

	bugThirdteen: BugTracker = new BugTracker( 13, "Working on the tablet and mobile version of the site!", "https://github.com/Daemonlord92/Developerportfoilo-fe", 'Angular' )
	bugFourteen: BugTracker = new BugTracker( 13, "Corrected Link bug in bug-tracker!", "https://github.com/Daemonlord92/Developerportfoilo-fe", 'Angular' )
	
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
	this.bugThirdteen,
	this.bugFourteen,
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
