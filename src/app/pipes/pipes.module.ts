import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambioLetrasPipe } from './cambio-letras.pipe';

@NgModule({
  declarations: [
    CambioLetrasPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CambioLetrasPipe
  ]
})
export class PipesModule { }
