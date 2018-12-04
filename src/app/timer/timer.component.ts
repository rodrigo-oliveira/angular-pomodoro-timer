import {Component} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  counter = 5 * 60;

  start() {
    const timer = () => {
      this.counter = this.counter - 1;
      console.log(this.counter);
    };
    const intervalTimer = setInterval(timer, 1000);

  }
}
