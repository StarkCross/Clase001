import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate',
})
export class CustomdatePipe implements PipeTransform {
  transform(fecha: Date): string {
    //dd/mm/AAAA
    let dias = fecha.getDate();
    let meses = fecha.getMonth() + 1;
    let años = fecha.getFullYear();

    let fecha_texto = dias + '/' + meses + '/' + años;
    return fecha_texto;
  }
}
