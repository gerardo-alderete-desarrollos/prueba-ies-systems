import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalBienvenidaComponent } from 'src/app/shared/modal-bienvenida/modal-bienvenida.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nombre!: string;
  constructor(public dialog: MatDialog,
              private router: Router) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalBienvenidaComponent, {
      width: '250px',
      data: '',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.nombre = result;
      setTimeout(() => {
        this.router.navigateByUrl('conversiones');
      }, 3000);
    });
  }

  ngOnInit(): void {
  }

}
