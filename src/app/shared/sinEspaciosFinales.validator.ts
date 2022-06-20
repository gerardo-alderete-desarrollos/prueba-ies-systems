import { AbstractControl } from '@angular/forms';

export function ValidarEspaciosFinales(control: AbstractControl) {
    let value = control.value;


  if (value) {
    let lengthCampo = control.value?.length;
    let isCampoValido = value[lengthCampo - 1].includes(' ');
    if( isCampoValido) {
        return { invalidCampo: true };
    }
    return null;
  }
  return null;
}