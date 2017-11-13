import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ReferenceService } from './servicesex/reference.service';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './servicesex/employee/employee.component';
import { ServiceexComponent } from './servicesex/serviceex/serviceex.component';
import { ParentComponent } from './inputoutputbinding/parent.component';
import { ChildComponent } from './inputoutputbinding/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ServiceexComponent,
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
