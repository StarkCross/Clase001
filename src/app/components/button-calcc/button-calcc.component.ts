import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-calcc',
  templateUrl: './button-calcc.component.html',
  styleUrls: ['./button-calcc.component.scss']
})
export class ButtonCalccComponent implements OnInit {

  @Input() textButton: string;
  @Output() onClick: EventEmitter<any>;
    constructor() {
      this.textButton ='';
      this.onClick = new EventEmitter<any>();

     }
  ngOnInit(): void {
  }

}
