import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private client:HttpClient) { }

  ngOnInit() {
  	this.client.get('http://localhost:4000')
  	.subscribe(response =>
  	{
  		console.log(response);
  	}, err => {
  		console.log('Api not called');
  	}
  	)
  }

}
