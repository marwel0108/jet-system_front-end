import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user!: any;
  hasSession: boolean = false;
  inLogin: boolean = true;
  url = 'http://localhost:80/api/auth/';

  constructor(private http: HttpClient) { }

  public isLogedIn(): boolean {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('user');
    if (!!token) {
      this.user = id;
      this.hasSession = true;
      this.inLogin = false;
    }
    return this.hasSession;
  }

  public login(form: any) {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'login', form, options);
  }

  public logout() {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append("Authorization", "Bearer" + localStorage.getItem('token'));
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'logout', {}, options);
  }

  public getPerfil() {
    let request;
    let httpHeaders: HttpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append("Authorization", "Bearer" + localStorage.getItem('token'));
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'profile/' + localStorage.getItem('user'), {}, options);
  }
}
