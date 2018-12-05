import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatButtonToggleModule
} from '@angular/material';
import { TimerComponent } from './timer.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  exports: [
    TimerComponent
  ],
  declarations: [
    TimerComponent
  ]
})
export class TimerModule { }
