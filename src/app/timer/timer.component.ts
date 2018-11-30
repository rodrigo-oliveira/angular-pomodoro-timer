import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  reason = '';

  start(reason: string) {
    this.reason = reason;
  }
}
