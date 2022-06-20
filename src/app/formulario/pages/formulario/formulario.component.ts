import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MensajeService } from 'src/app/shared/mensaje/mensaje.service';
import { ValidarEspaciosFinales } from 'src/app/shared/sinEspaciosFinales.validator';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  myForm!: FormGroup;
  titulo! : string;
  isControlLibros = true;
  estadosCiviles = [
    {
      value: 12,
      texto: 'Soltero'
    },
    {
      value: 13,
      texto: 'Casado'
    },
    {
      value: 14,
      texto: 'Viudo'
    },
  ]
  constructor(private activateRoute: ActivatedRoute,
              private formularioService: FormularioService,
              public fb: FormBuilder,
              private mensajesService: MensajeService) {
    activateRoute.data.subscribe( (data: any) => {
      this.titulo =  data.titulo;
    })
  }

  ngOnInit(): void {
    this.reactiveForm();

    this.formularioService.getCatalogoEstadoCivil().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

    this.myForm.get('actualmentePracticasLectura')?.valueChanges.subscribe( data => {
      if( data ) {
        this.agregarControlLibros();
        this.agregarLibro();
      } else {
        this.eliminarControlLibros();
      }
    })
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      nombres: ['', [Validators.required, ValidarEspaciosFinales]],
      apellidos: [null, [Validators.required, ValidarEspaciosFinales]],
      fumas: [true, [Validators.required]],
      actualmentePracticasLectura: [true, [Validators.required]],
      estadoCivil: [''],
    });
    this.agregarControlLibros();
    this.agregarLibro();
  }

  agregarControlLibros() {
    this.isControlLibros = true;
    this.myForm.addControl( 'librosLeidosUltimosTresMeses', this.fb.array([]) )
  }

  eliminarControlLibros() {
    this.isControlLibros = false;
    this.myForm.removeControl('librosLeidosUltimosTresMeses');
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control]?.hasError(error);
  }

  submitForm() {
    if( this.myForm.valid ) {
      this.mensajesService.abrirMensaje('Formulario valido', 'mensaje-exitoso'); 
    } else {
      this.mensajesService.abrirMensaje('Formulario invalido', 'mensaje-error'); 
    }
  }
 
  get librosLeidosUltimosTresMeses() : FormArray {
    return this.myForm.get("librosLeidosUltimosTresMeses") as FormArray
  }

 nuevoLibro(): FormGroup {
    return this.fb.group({
      nombreLibro: [ '', Validators.required ]
    })
 }

agregarLibro() {
  this.librosLeidosUltimosTresMeses.push(this.nuevoLibro());
}

eliminarLibro(i:number) {
  this.librosLeidosUltimosTresMeses.removeAt(i);
}

}
