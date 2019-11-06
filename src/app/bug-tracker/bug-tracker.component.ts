import { Component, OnInit } from '@angular/core';
import { BugTracker } from './bug-tracker';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.scss']
})
export class BugTrackerComponent {
	bugOne: BugTracker = new BugTracker( 1, 'Creating test data to work with on bug-tracker', 'github.com/Daemonlord92/Developer-portfoilo-fe','Angular, Ruby on Rails' )
	bugTwo: BugTracker = new BugTracker( 2, 'working on bootstrap design', 'github.com/Daemonlord92/Developer-portfoilo-fe','Angular, Ruby on Rails' )
	bugThree: BugTracker = new BugTracker( 3, 'Begin to work on the homepage', 'github.com/Daemonlord92/Developer-portfoilo-fe','Angular, Ruby on Rails' )
	bugFour: BugTracker = new BugTracker( 4, 'Setup Project page and testing data', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails' )
	bugFive: BugTracker = new BugTracker( 5, 'Setup blog page and testing', 'github.com/Daemonlord92/Developerportfoilo-fe', 'Angular, Ruby on Rails')


	bugs: Bug[] = [
	this.bugOne,
	this.bugTwo,
	this.bugThree,
	this.bugFour,
	this.bugFive,
	]
  

}
