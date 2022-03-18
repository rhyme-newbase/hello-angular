import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopwatchComponent } from './stopwatch.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent
  ],

  exports : [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class StopwatchModule { }
