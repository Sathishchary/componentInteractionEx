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
  isReader = false;
  isAppParentChild = false;
   constructor() { }
   appParent(event){
	 this.isServiceEx = false;
	 this.isAppParent = true;
	 this.isReader = false;
	 this.isAppParentChild = false;
   }
   appServiceEx(event){
	   this.isServiceEx = true;
	   this.isAppParent = false;
	   this.isReader = false;
	   this.isAppParentChild = false;
   }
   appReader(event){
	   this.isServiceEx = false;
       this.isAppParent = false;
	   this.isReader = true;
	   this.isAppParentChild = false;
   }
   appParentchild(){
	   this.isServiceEx = false;
       this.isAppParent = false;
       this.isReader = false;
       this.isAppParentChild = true; 
   }

  ngOnInit() {
  }
}
