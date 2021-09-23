import {
  Component
} from '@angular/core';

@Component({
  selector: 'second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class Second  {


  content: string;
  btnText: string;

  constructor() {
    this.content = 'Hello World';
    this.btnText = 'Ejecutar';
  }

  clickOnButton($event: any) {
    console.log('$event:', $event);
    alert('click-');
  }
}
