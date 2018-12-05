import {Component} from '@angular/core';

function formatToMinutes(seconds: number) {
  return (seconds - (seconds %= 60)) / 60 +
    (9 < seconds ? ':' : ':0') + seconds;
}

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {
  paused: Boolean = false;
  counter: number = 5 * 60;
  started: Boolean = false;
  intervalTimer;
  countdown: String;

  constructor() {
    this.countdown = formatToMinutes(this.counter);
  }

  public timer = () => {
    if (!this.paused) {
      this.counter = this.counter - 1;
      this.countdown = formatToMinutes(this.counter);
    } else {
      clearInterval(this.intervalTimer);
    }
  }

  start() {
    this.paused = false;
    this.started = true;
    this.intervalTimer = setInterval(this.timer, 1000);
  }

  pause() {
    this.paused = true;
    this.started = false;
  }

  reset() {
    clearInterval(this.intervalTimer);
    this.started = false;
    this.counter = 5 * 60;
    this.countdown = formatToMinutes(this.counter);
  }
}
