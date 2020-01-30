import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emps=[
    {id:1,name:'suresh',address:'chennai'},
    {id:2,name:'ramesh',address:'chennai'},
    {id:3,name:'vamsi',address:'hyderabad'}
  ]
}
