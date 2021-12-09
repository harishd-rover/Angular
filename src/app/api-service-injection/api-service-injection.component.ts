import { Component, OnInit } from '@angular/core';
import { IEmployee } from './Employee';
import { EmployeeService } from './EmployeeService';

@Component({
  selector: 'app-api-service-injection',
  templateUrl: './api-service-injection.component.html',
  styleUrls: ['./api-service-injection.component.css']
})
export class ApiServiceInjectionComponent implements OnInit {


  public employees!:IEmployee[];
 //public errorMsg:any

  constructor(private service:EmployeeService) { }

  ngOnInit() {
    this.service.getEmployees().subscribe(data=>this.employees = data)
  }

}
