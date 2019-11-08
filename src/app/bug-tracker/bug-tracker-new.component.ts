import { Component } from '@angular/core';
import { BugTracker } from './bug-tracker';

@Component({
	selector: 'app-bug-tracker-new',
	templateUrl: 'bug-tracker-new.component.html'
})
export class BugTrackerNewComponent {	
	bugtracker = new BugTracker;
}
