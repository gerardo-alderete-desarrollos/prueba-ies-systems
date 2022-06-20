import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calcula-fecha',
  templateUrl: './calcula-fecha.component.html',
  styleUrls: ['./calcula-fecha.component.css']
})
export class CalculaFechaComponent implements OnInit {
  myForm!: FormGroup;
  titulo! : string;
  fechaCalculada!: any;

  unidades = [
    {
      value: 1,
      texto: 'días'
    },
    {
      value: 2,
      texto: 'meses'
    },
    {
      value: 3,
      texto: 'años'
    },
  ]
  constructor(private activateRoute: ActivatedRoute,
              public fb: FormBuilder) {
    activateRoute.data.subscribe( (data: any) => {
      this.titulo =  data.titulo;
    })
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.myForm.valueChanges.subscribe( data => {
      this.fechaCalculada =  null;
    });
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      fecha: ['', [Validators.required]],
      unidad: [null, [Validators.required]],
      cantidad: ['', [Validators.required]],

    })
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    
    if( this.myForm.valid ) {
      const { fecha , unidad, cantidad} = this.myForm.getRawValue();

      switch (unidad) {
        case 1:
          this.fechaCalculada = this.sumarDias(fecha,cantidad);
          break;
        case 2:
          this.fechaCalculada = this.sumarMeses(fecha,cantidad);
          break;
        case 3:
          this.fechaCalculada = this.sumarAnios(fecha,cantidad);
          break;
        default:
          break;
      }
    }
  }

  sumarDias(fecha: Date, dias: number){
    let nuevaFecha: Date = new Date(fecha); 
    nuevaFecha.setDate(fecha.getDate() + dias);
    return nuevaFecha;
  }

  sumarMeses(fecha: Date, meses: number){
    let nuevaFecha: Date = new Date(fecha); 
    nuevaFecha.setMonth(fecha.getMonth() + meses);
    return nuevaFecha;
  }

  sumarAnios(fecha: Date, anios: number){
    let nuevaFecha: Date = new Date(fecha); 
    nuevaFecha.setFullYear(fecha.getFullYear() + anios);
    return nuevaFecha;
  }
}
