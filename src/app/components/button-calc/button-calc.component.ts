import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'button-calc',
  templateUrl: './button-calc.component.html',
  styleUrls: ['./button-calc.component.scss']
})
export class ButtonCalcComponent implements OnInit {

  @Input() itemIn: any; // Property binding []
  @Input() classIn: string; // Property binding []
  @Output() eventClick: EventEmitter<any>; // Event binding ()

  constructor() {
    this.eventClick = new EventEmitter<any>();
    this.classIn = 'btn-primary';
  }

  ngOnInit(): void {
    this.classIn = (this.classIn || 'btn-primary')
    this.itemIn.value = ((this.itemIn.value !== null) ? this.itemIn.value : '-');
  }

  clickOnButton(event: any) {
    // console.log('event:', event)
    // console.log('this.itemIn:', this.itemIn)
    // this.itemIn.clicked = true;
    this.eventClick.emit(this.itemIn);
  }

}
