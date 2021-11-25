import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  url: string = 'http://localhost:80/api/'

  constructor(private http: HttpClient) { }

  public getMaterias() {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();

    const options = {
      headers: httpHeaders
    };

    return request = this.http.get(`${this.url}materias`, options);
  }

  public getMateriasAlumno() {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append("Authorization", "Bearer" + localStorage.getItem('token'));
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'auth/alumno/materias/' + localStorage.getItem('user'), {}, options);
  }

  public darDeAlta(id_materia: number) {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append("Authorization", "Bearer" + localStorage.getItem('token'));
    const options = {
      headers: httpHeaders
    };
    const body = {
      materia: id_materia
    };

    return request = this.http.post(this.url + 'auth/alumno/dar_alta/' + localStorage.getItem('user'), body, options);
  }

  public darDeBaja(id_materia: number) {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append("Authorization", "Bearer" + localStorage.getItem('token'));
    const options = {
      headers: httpHeaders
    };
    const body = {
      materia: id_materia
    };

    return request = this.http.post(this.url + 'auth/alumno/dar_baja/' + localStorage.getItem('user'), body, options);
  }
}
