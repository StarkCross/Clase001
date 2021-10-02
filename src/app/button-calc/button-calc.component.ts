import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button-calc',
  templateUrl: './button-calc.component.html',
  styleUrls: ['./button-calc.component.scss']
})
export class ButtonCalcComponent implements OnInit {
@Input() textButton: string;
@Output() onClick: EventEmitter<any>;
  constructor() {
    this.textButton ='';
    this.onClick = new EventEmitter<any>();

   }



  ngOnInit(): void {
  }

}
