import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {




@Output() clickEvent = new EventEmitter(); //컴포넌트의 이벤트 클릭

  constructor() {

   }

  executeButton(command){
    this.clickEvent.emit(command);// 부모 객체가 이벤트를 기다렸다가 해당 데이터 클릭 했을 때 데이터를 받음, //emit 어떤 값이라도 들어감
 
  }

  ngOnInit(): void {
  }

}
