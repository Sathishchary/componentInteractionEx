import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readers',
  templateUrl: './readers.component.html',
  styleUrls: ['./readers.component.css']
})
export class ReadersComponent implements OnInit {
  intrestedToRead = 0;
  notIntrestedToRead= 0;
  readersInfo:any;	
  readersInfoNames:any;
  constructor() {
	  this.readersInfo =   [ { "id": 10, "firstName":"Sathish", "lastName":"Kotha" },
	                         { "id": 11, "firstName":"Ramesh", "lastName":"Kotha" },
	                         { "id": 12, "firstName":"Srinu", "lastName":"Lal" },
	                         { "id": 13, "firstName":"Krishan", "lastName":"Kotha" },
	                         { "id": 14, "firstName":"Rajesh", "lastName":"Raj" },
	                       ];
  }
  onVoted(agreed: boolean) {
	    agreed ? this.intrestedToRead++ : this.notIntrestedToRead++;
	  }
  
  ngOnInit() {
  }

}
