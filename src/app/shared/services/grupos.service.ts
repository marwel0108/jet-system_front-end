import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  url = 'http://localhost:80/api/auth/';

  constructor(private http: HttpClient) { }

  public getGrupos() {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append("Authorization", "Bearer" + localStorage.getItem('token'));
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'grupos/' + localStorage.getItem('user'), {}, options);
  }
}
