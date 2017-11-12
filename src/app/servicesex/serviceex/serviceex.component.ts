import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-serviceex',
  templateUrl: './serviceex.component.html',
  styleUrls: ['./serviceex.component.css']
})
export class ServiceexComponent implements OnInit {

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
  this.referenceService.allEmployeesData = null;
  this.employeeData = null;
  this.employeedataSend = false;
}
ngOnInit() {
  // this.getEmployees();
}
}
