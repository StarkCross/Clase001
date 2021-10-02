import { Component, OnInit, ViewChild } from '@angular/core';
import { CalcService } from '@src/app/services/calc.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  bool_check: boolean;
  model: string;
  numbers_calc: any[];
  result?: string;
  calcService: CalcService = new CalcService();
  titulo: string;
  fecha_actual: Date;
  @ViewChild('inputCalc', { static: true }) inputCalc?: any;
  @ViewChild('inputCalcFalse', { static: false }) inputCalcFalse?: any;

  constructor() {}

  ngOnInit(): void {
    this.incializarVariables();
  }

  functionCalc() {
    this.result = this.calcService.evalOperation(this.model);
  }

  keyFindBtn(event: any) {
    this.numbers_calc.forEach((element, index, array) => {
      element.class =
        element.value == event.key ? 'btn-success' : 'btn-primary';
    });
  }

  functionClearCalc() {
    this.model = '';
    this.result = '';
  }

  clickParent(itemIn?: any) {
    this.model +=
      (isNaN(itemIn.value) ? ' ' : '') +
      itemIn.value +
      (isNaN(itemIn.value) ? ' ' : '');
  }

  printViewChild(element: any) {
    console.log('element:', element);
    console.log('this.inputCalc:', this.inputCalc);
    console.log('this.inputCalcFalse:', this.inputCalcFalse);
    console.log('this.inputCalc:', this.inputCalc?.nativeElement);

    let el = document.getElementById('inputCalc');
    console.log('el:', el);
  }

  incializarVariables() {
    this.titulo = 'Componente Calculadora';
    this.fecha_actual = new Date();
    this.bool_check = true;
    this.model = '';
    this.numbers_calc = [
      { value: '-', text: '' },
      { value: '+', text: '' },
      { value: '*', text: '' },
      { value: '/', text: '' },
      { value: '(', text: '' },
      { value: 0, text: 'zero' },
      { value: 1, text: 'one' },
      { value: 2, text: 'two' },
      { value: 3, text: 'three' },
      { value: 4, text: 'four' },
      { value: 5, text: 'five' },
      { value: 6, text: 'six' },
      { value: 7, text: 'seven' },
      { value: 8, text: 'eight' },
      { value: 9, text: 'nine' },
      { value: ')', text: '' },
    ];
  }
}
