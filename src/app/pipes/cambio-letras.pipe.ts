import { Pipe, PipeTransform } from '@angular/core';

const cambio = [
  {
    elemento: 'a',
    remplazarPor: '4'
  },
  {
    elemento: 'e',
    remplazarPor: '3'
  },
  {
    elemento: 'i',
    remplazarPor: '1'
  },
  {
    elemento: 'o',
    remplazarPor: '0'
  },
  {
    elemento: 'u',
    remplazarPor: '9'
  },
];

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    let cadena = value;

    cambio.forEach( c => {
      cadena = cadena.replace(c.elemento, c.remplazarPor);
    });

    return cadena;
  }

}
