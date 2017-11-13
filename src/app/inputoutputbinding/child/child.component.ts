import { Component, OnInit, Input } from '@angular/core';
import {Employee } from '../models/employee'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() employeeData : any;
  @Input() employees: Employee;
  @Input('employer') empName: string;
  empid :number;
  firstName:string;
  lastName:string;
  employeeDatachild:any;
  constructor() { }
  addEmployee(){
      let obj = {
              'id' : this.empid,
              'firstName' : this.firstName,
              'lastName' : this.lastName
      }
      this.employeeDatachild.push(obj);  
      this.empid = null;
      this.firstName = null;
      this.lastName = null;
  }
  ngOnInit() {
	  this.employeeDatachild = this.employeeData;
  }

}
