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

    settingValues(serviceevent: boolean, parenttochild: boolean, readersinfo: boolean, viewchildex: boolean, viewchildlocal: boolean) {
        this.serviceExample = serviceevent;
        this.parentToChild = parenttochild;
        this.readerinfo = readersinfo;
        this.viewChildExample = viewchildex;
        this.viewchildLocal = viewchildlocal;
    }
    serviceExampleData(event) {
        this.settingValues(event, false, false, false, false);
    }
    parentToChildData(event) {
        this.settingValues(false, event, false, false, false);
    }
    readerinfoData(event) {
        this.settingValues(false, false, event, false, false);
    }
    viewChildexampleData(event) {
        this.settingValues(false, false, false, event, false);
    }
    viewChildexampleLocal(event) {
        this.settingValues(false, false, false, false, event);
    }
    ngOnInit() {
    }
}
