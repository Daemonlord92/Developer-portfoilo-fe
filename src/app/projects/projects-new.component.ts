import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from './project';

@Component({
	selector: 'app-project-new',
	templateUrl: 'projects-new.component.html'
})

export class ProjectsNewComponent implements OnInit {
	project = new Project;

	loading: boolean = false;
	items;
	errorMessage;

	constructor(private client:HttpClient) {}

	public postNewProject() {
		this.loading = true;
		this.errorMessage = "";
		this.client.post<Project>('http://localhost:4000/api/project', this.project)
		.subscribe( (res) => {
			console.log(res);
		}, 
		(error) => {
			console.error('Request failed with error')
					this.errorMessage = error;
					console.log(this.errorMessage)
					this.loading = false;
		})
	}

	ngOnInit() {
		this.postNewProject();
	}
}
