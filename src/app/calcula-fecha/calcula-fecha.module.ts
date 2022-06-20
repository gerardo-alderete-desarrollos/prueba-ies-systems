import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculaFechaRoutingModule } from './calcula-fecha-routing.module';
import { CalculaFechaComponent } from './pages/calcula-fecha/calcula-fecha.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculaFechaComponent
  ],
  imports: [
    CommonModule,
    CalculaFechaRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CalculaFechaModule { }
