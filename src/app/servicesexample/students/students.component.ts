import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  employeeDatachild: any;
  constructor(public referenceService: ReferenceService) { }

  ngOnInit() {
    this.employeeDatachild = this.referenceService.allEmployeesData;
  }
}
