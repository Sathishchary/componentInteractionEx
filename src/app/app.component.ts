import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'component interaction app';
    serviceExample = false;
    parentToChild = false;
    readerinfo = false;
    viewChildExample = false;
    viewchildLocal = false;
    constructor() { }

    settingBooleanValues(serviceevent:boolean,parenttochild:boolean,readersinfo:boolean,viewchildex:boolean,viewchildlocal:boolean) {
        this.serviceExample = serviceevent;
        this.parentToChild = parenttochild;
        this.readerinfo = readersinfo;
        this.viewChildExample = viewchildex;
        this.viewchildLocal = viewchildlocal;
        
    }
    serviceExampleData(event) {
        this.settingBooleanValues(event, false, false, false, false);
    }
    parentToChildData(event) {
        this.settingBooleanValues(false, event, false, false, false);
    }
    readerinfoData(event) {
        this.settingBooleanValues(false, false, event, false, false);
    }
    viewChildexampleData(event) {
        this.settingBooleanValues(false, false, false, event, false)
    }
    viewChildexampleLocal(event) {
        this.settingBooleanValues(false, false, false, false, event);
    }
    ngOnInit() {
    }
}
