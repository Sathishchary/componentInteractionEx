import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CountChildComponent } from './count-child/count-child.component';

@Component({
    selector: 'app-count',
    templateUrl: './count.component.html',
})
export class CountComponent {

    @ViewChild(CountChildComponent)
    public timerComponent: CountChildComponent;

    increaseCount() {
	       this.timerComponent.increaseCountOne();
    }
    decreaseCount() {
	       this.timerComponent.decreaseCountOne();
    }
    clearCount() {
        this.timerComponent.clearCount();
    }
}
