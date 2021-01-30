import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { BugTracker } from './bug-tracker';

@Injectable()
export class BugTrackerService {
	baseURL: string = "http://localhost:4000/api/bugtracker";
	constructor(private http: HttpClient) {

	}

	getBugTracker(): Observable<any> {
		return this.http.get(this.baseURL)
	}
}
