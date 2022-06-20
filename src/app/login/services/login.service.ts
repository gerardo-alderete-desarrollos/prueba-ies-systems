import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient ) { }

  login(user: Usuario): Observable<any>{
    const body = user;
    return this.http.post('https://desa.ies-webcontent.com.mx/login', body)
  }

  guardarInfoUsuario(isLogged: string, data: any) {
    const { infUsuario , token } = data;
    sessionStorage.setItem('isLogged', JSON.stringify(isLogged))
    sessionStorage.setItem('infUsuario', JSON.stringify(infUsuario))
    sessionStorage.setItem('token', JSON.stringify(token))
  }

  logout() {
    sessionStorage.clear();
  }

  sesionActiva() {
    return Boolean(sessionStorage.getItem('isLogged'));
  }
}
