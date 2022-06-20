import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RouterModule } from '@angular/router';
import { ModalBienvenidaComponent } from './modal-bienvenida/modal-bienvenida.component';
import { FormsModule } from '@angular/forms';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MensajeComponent,
    ModalBienvenidaComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    SidebarComponent,
    TituloComponent
  ]
})
export class SharedModule { }
