import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetailsService } from '../service/login-details-service.service';
import { Authorities } from './authorities';

@Injectable({
  providedIn: 'root',
})
export class AuthoritiesService implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private http: HttpClient,
    private serviceLogin: LoginDetailsService
  ) {}

  ngOnInit() {}
  public getUserAndPassword() {
    this.username = this.serviceLogin.credencial[0].username;
    this.password = this.serviceLogin.credencial[0].password;
  }

  public getAuthByName(u: string) {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/single-auth/';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}` + `${u}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public getAllAuth() {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/auth';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public addAuth(data: any): Observable<any> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/add-auth';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post(`${urlApi}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public deleteAuth(username: string): Observable<any> {
    this.getUserAndPassword();

    var urlApi = 'http://localhost:8080/delete-auth';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete(`${urlApi}/${username}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public editAuth(username?: string, value?: any): Observable<Object> {
    this.getUserAndPassword();

    var urlApi = 'http://localhost:8080/update-auth';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put(`${urlApi}/${username}`, value, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public singleAuth(username: string): Observable<Authorities> {
    this.getUserAndPassword();

    var urlApi = 'http://localhost:8080/single-auth';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<Authorities>(`${urlApi}/${username}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  isLoggedInTrue() {
    sessionStorage.getItem('user') != null;
  }
  geUserRole() {
    sessionStorage.getItem('role') != null
      ? sessionStorage.getItem('role')?.toString()
      : '';
  }
}
