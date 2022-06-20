import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConversionesRoutingModule } from './conversiones-routing.module';
import { ConversionesComponent } from './pages/conversiones/conversiones.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ConversionesComponent
  ],
  imports: [
    CommonModule,
    ConversionesRoutingModule,
    SharedModule
  ]
})
export class ConversionesModule { }
