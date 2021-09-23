import { Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})

export class MyComponent {

  content: string;
  btnText: string;

  constructor() {
    this.content = 'Hola, desde Angular';
    this.btnText = 'Ejecutar';
  }

  clickOnButton($event: any) {
    console.log('$event:', $event);
    alert('click-');
  }
}
