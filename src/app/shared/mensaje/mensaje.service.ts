import { ComponentType } from '@angular/cdk/portal';
import { Component, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MensajeComponent } from './mensaje.component';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor(private snackBar: MatSnackBar) {}

 abrirMensaje(mensaje: string, tipo: string) {
    /* 
    this.snackBar.openFromComponent(MensajeComponent, {
      duration: 3 * 1000,
      data: 'Informacion enviada'
    }); */
    this.snackBar.open(mensaje, "", {
      duration: 1500,
      horizontalPosition: "center",
      verticalPosition: "top",
      panelClass: [tipo]
    });
  }
 
}


