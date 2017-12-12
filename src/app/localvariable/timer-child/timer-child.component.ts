import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'app-timer-child',
    template: '<p>{{message}}</p>',
    styleUrls: ['./timer-child.component.css']
})
export class TimerChildComponent implements OnInit, OnDestroy {

    intervalId = 0;
    message = '';
    seconds = 60;

    clearTimer() { clearInterval(this.intervalId); }

    ngOnInit() { this.start(); }
    ngOnDestroy() { this.clearTimer(); }

    start() { this.countDown(); }
    stop() {
        this.clearTimer();
        this.message = `stopped at ${this.seconds} seconds`;
    }

    private countDown() {
        this.clearTimer();
        this.intervalId = window.setInterval(() => {
            this.seconds -= 1;
            if (this.seconds === 0) {
                this.message = 'ended!';
            } else {
                if (this.seconds < 0) { this.seconds = 59; } // reset
                this.message = `${this.seconds} seconds and counting`;
            }
        }, 1000);
    }

}
