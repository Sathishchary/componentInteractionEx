import { Component, OnInit, OnChanges,SimpleChange } from '@angular/core';
import { EMPLOYEES } from './models/employee'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  employeeData: any;
  employees = EMPLOYEES;
  employername = 'Sathish Kotha';
  constructor() {
   this.employeeData = [ { "id": 10, "firstName":"Sathish", "lastName":"Kotha" },
                         { "id": 11, "firstName":"Ramesh", "lastName":"Kotha" }
                       ];
  }
  deleteEmployee(index:number){
	  this.employeeData.splice(index, 1);
  }
  ngOnInit() {
	  console.log(this.employees);
  }

}
