import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'welcome';


  commandText
  
  constructor() { }


  startTime(event){
    this.present = event;
    
  }

  ngOnInit(): void {
  }

}
