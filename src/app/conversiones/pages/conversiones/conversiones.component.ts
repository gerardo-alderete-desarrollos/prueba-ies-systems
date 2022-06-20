import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversiones',
  templateUrl: './conversiones.component.html',
  styleUrls: ['./conversiones.component.css']
})
export class ConversionesComponent implements OnInit {
  titulo! : string;
  html!: string;

  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.data.subscribe( (data: any) => {
      this.titulo =  data.titulo;
    })
  }

  ngOnInit(): void {
    this.html = `
      <h1>${this.titulo}</h1>
    `
  }

}
