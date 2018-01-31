import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
    item: Item;
    allItems = [];
    itemClicked = false;
    isSaveCustomer = false;
    shopName = 'All items Store';

    constructor() {
    	this.item = new Item();
    }
    creteItem() {
        this.itemClicked = true;
        this.isSaveCustomer = false;
        this.item = new Item(); // re initializing the item model to empty the previous details
    }
    saveItemToCustomer() {
       if(this.item.customerName.length>0 && this.item.itemName.length> 0){
    	console.log(this.item);
        this.allItems.push(this.item); // storing the item model data into all items array list
        this.itemClicked = false;
        this.isSaveCustomer = true;
       }
    }
    update(event: Item){  // output event emitter comes from the child component
    	alert(event.customerName+'customer deleted');
    	this.allItems = this.allItems.filter(i => i.customerName !== event.customerName); // deleting the item which we clicked in child component
    }
    ngOnInit() {
    }

}
