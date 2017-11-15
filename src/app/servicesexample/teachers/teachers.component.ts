import { Component, OnInit } from '@angular/core';
import { ReferenceService } from '../reference.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

subjectInfoDataInTeachers: any;
subjectInfo = false;

constructor(public referenceService: ReferenceService) { }

getAllSubjects() {
  this.referenceService.getAllEmployees().subscribe(
    (result: any) => {
      this.subjectInfoDataInTeachers = result;   // got the whole subjects data here.
      this.referenceService.allSubjectInfo = result; // assigning the subject info to reference service 
      console.log(result);
    },
    (error: any) => console.log('error' + error)

  );
}
sendSubjects() {
  this.subjectInfo = true;
  this.referenceService.allSubjectInfo = this.subjectInfoDataInTeachers;
}
clearSubjectsData() {
  this.subjectInfoDataInTeachers = null;
  this.subjectInfo = false;
}
ngOnInit() {
  // this.getEmployees();
}
}
