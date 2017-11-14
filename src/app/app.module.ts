import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ReferenceService } from './servicesexample/reference.service';
import { AppComponent } from './app.component';
import { StudentsComponent } from './servicesexample/students/students.component';
import { TeachersComponent } from './servicesexample/teachers/teachers.component';
import { ParentComponent } from './inputoutputbinding/parent.component';
import { ChildComponent } from './inputoutputbinding/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [ReferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
