import { Component } from '@angular/core';

@Component({
  selector: 'in-line-component',
  template: `
  <h1>hola mundo component in line</h1>
    <p>texto parrafo</p>
    `,
  styles: ['h1{ font-size: 55px; }']
})
export class InLineComponent {
  constructor() {

  }
}
