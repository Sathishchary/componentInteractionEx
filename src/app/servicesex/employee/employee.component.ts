import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeDatachild: any;
  constructor(public referenceService: ReferenceService) { }

  ngOnInit() {
    this.employeeDatachild = this.referenceService.allEmployeesData;
  }
}
