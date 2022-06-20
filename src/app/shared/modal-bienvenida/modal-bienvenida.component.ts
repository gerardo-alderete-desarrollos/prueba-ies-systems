import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HomeComponent } from 'src/app/inicio/pages/home/home.component';

@Component({
  selector: 'app-modal-bienvenida',
  templateUrl: './modal-bienvenida.component.html',
  styleUrls: ['./modal-bienvenida.component.css']
})
export class ModalBienvenidaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public nombre: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
