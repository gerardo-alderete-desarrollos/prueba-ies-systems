import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menu = [
    {
      titulo: 'Conversiones',
      path: '/conversiones'
    },
    {
      titulo: 'Calcula Fecha',
      path: '/calculaFecha'
    },
    {
      titulo: 'Formulario',
      path: '/formulario'
    },
  ]

  constructor() {
  }
}
