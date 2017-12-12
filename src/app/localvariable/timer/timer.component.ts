import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {TimerChildComponent } from '../timer-child/timer-child.component'

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements AfterViewInit {
 
 @ViewChild(TimerChildComponent)
 public timer: TimerChildComponent;	

 constructor(){}
 seconds() { return 0; }

 ngAfterViewInit() {
   setTimeout(() => this.seconds = () => this.timer.seconds, 0);
 }

 start() { this.timer.start(); }
 stop() { this.timer.stop(); }
}
