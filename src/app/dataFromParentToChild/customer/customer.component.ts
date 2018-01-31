import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @Input() allItems: Item[];
  @Output() notifyParent: EventEmitter<Item>;
  constructor() {
	  this.notifyParent = new EventEmitter<Item>();
  }
  deleteItem(item:Item){
	  this.notifyParent.emit(item);
  }
  ngOnInit() {
    console.log(this.allItems);
  }

}
