import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor( private http: HttpClient ) { }

  getCatalogoEstadoCivil(): Observable<any>{
    const body = {};
    return this.http.post('http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil', body);
  }
}
