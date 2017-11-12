import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'component interaction app';
  isServiceEx = false;
  isAppParent = false;
   constructor() { }
   appParent(event){
	 this.isServiceEx = false;
	 this.isAppParent = true;
   }
   appServiceEx(event){
	   this.isServiceEx = true;
	   this.isAppParent = false;
   }

  ngOnInit() {
  }
}
