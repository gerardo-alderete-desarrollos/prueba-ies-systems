import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/shared/mensaje/mensaje.service';
import { Usuario } from '../../models/usuario';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(public fb: FormBuilder,
              private loginService: LoginService,
              private mensajeService: MensajeService,
              private router: Router) {
                this.loginService.logout();
              }

  ngOnInit(): void {
    this.reactiveForm()

  }

  reactiveForm() {
    this.myForm = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],

    })
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  submitForm() {
    if( this.myForm.valid ) {
      const usuario: Usuario = {
        username: this.myForm.get('usuario')?.value,
        password: this.myForm.get('password')?.value
      }

      this.loginService.login(usuario).subscribe(
        result => {
          
          const { exito, mensaje , data } = result;
          if( exito ) {
            this.loginService.guardarInfoUsuario(exito,data)
            this.mensajeService.abrirMensaje(mensaje, 'mensaje-exitoso'); 
            this.router.navigateByUrl('inicio');
          }
        },
        error => {
          this.mensajeService.abrirMensaje(error.error.mensaje, 'mensaje-error'); 
        }
      )
    }
  }
}
