import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  evalOperation(stringOperation: string) {
    // console.log('stringOperation:', stringOperation)
    return eval(stringOperation);
  }



}
