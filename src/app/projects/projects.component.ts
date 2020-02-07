import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
	projectOne: Project = new Project( 1, 'Excursion', 'https://github.com/Daemonlord92/excursion', 'https://daemonlord92.github.io/excursion/', 'HTML, CSS, Image', 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg')
	projectTwo: Project = new Project( 2, 'Tesla Clone', 'https://github.com/Daemonlord92/bottega-tesla-clone', 'https://daemonlord92.github.io/bottega-tesla-clone/', 'Ruby, Ruby on Rails, Bootstrap, JavaScript', 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg')
	projectThree: Project = new Project( 3, 'Developer Rails Project', 'https://github.com/Daemonlord92/bottega-EJM', 'https://ejm-developer.herokuapp.com/', 'Ruby, Ruby on Rails, Bootstrap, JavaScript', 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg')
	projectFour: Project = new Project( 4, 'Developer Rails Project', 'https://github.com/Daemonlord92/bottega-EJM', 'https://ejm-developer.herokuapp.com/', 'Ruby, Ruby on Rails, Bootstrap, JavaScript', 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg')
	projectFive: Project = new Project( 5, 'Developer Rails Project', 'https://github.com/Daemonlord92/bottega-EJM', 'https://ejm-developer.herokuapp.com/', 'Ruby, Ruby on Rails, Bootstrap, JavaScript', 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg')
	projectSix: Project = new Project( 6, 'Developer Rails Project', 'https://github.com/Daemonlord92/bottega-EJM', 'https://ejm-developer.herokuapp.com/', 'Ruby, Ruby on Rails, Bootstrap, JavaScript', 'https://thumbs.dreamstime.com/z/business-solution-8384779.jpg')

	projects: Project[] = [
	this.projectOne,
	this.projectTwo,
	this.projectThree,
	this.projectFour,
	this.projectFive,
	this.projectSix,
	]

}
