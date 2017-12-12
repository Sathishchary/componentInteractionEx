import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReferenceService } from './servicesexample/reference.service';
import { AppComponent } from './app.component';
import { StudentsComponent } from './servicesexample/students/students.component';
import { TeachersComponent } from './servicesexample/teachers/teachers.component';
import { BooksComponent } from './parentChildEvents/books/books.component';
import { ReadersComponent } from './parentChildEvents/readers/readers.component';
import { ShopComponent } from './dataFromParentToChild/shop/shop.component';
import { CustomerComponent } from './dataFromParentToChild/customer/customer.component';
import { CountComponent } from './viewChildExample/count.component';
import { CountChildComponent } from './viewChildExample/count-child/count-child.component';
import { TimerChildComponent } from './localvariable/timer-child/timer-child.component';
import { TimerComponent } from './localvariable/timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    TeachersComponent,
    BooksComponent,
    ReadersComponent,
    ShopComponent,
    CustomerComponent,
    CountComponent, CountChildComponent, TimerChildComponent, TimerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [ReferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
