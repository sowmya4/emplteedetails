import { Component, OnInit } from '@angular/core';
import { EmplyeeListComponent } from './emplyeelist/emplyee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
