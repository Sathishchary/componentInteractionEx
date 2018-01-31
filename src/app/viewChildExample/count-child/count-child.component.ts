import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-child',
  template: '<b>{{messagecount}}</b>'
})
export class CountChildComponent {

  messagecount = '';
  count = 0;
  constructor(){
	  this.messagecount = "Count no is : " + this.count;
  }
  clearCount(){
	  this.count = 0;
	  this.messagecount = "Count no is : " + this.count;
  }

  increaseCountOne() {
      this.count = this.count + 1;
      this.messagecount = "Count no is : " + this.count;
   }
   decreaseCountOne() {
      this.count = this.count - 1;
      this.messagecount = "Count no is : " + this.count;
   }
}