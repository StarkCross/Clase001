import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(texto: string): string {
    return texto.toUpperCase();
  }
}
