import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

employeeData: any;
employeedataSend = false;

constructor(public referenceService: ReferenceService) { }

getEmployees() {
  this.referenceService.getAllEmployees().subscribe(
    (result: any) => {
      this.employeeData = result;
      this.referenceService.allEmployeesData = result;
      console.log(result);
    },
    (error: any) => console.log('error' + error)

  );
}
sendEmployees() {
  this.employeedataSend = true;
  this.referenceService.allEmployeesData = this.employeeData;
}
clearEmpData() {
  this.employeeData = null;
  this.employeedataSend = false;
}
ngOnInit() {
  // this.getEmployees();
}
}
