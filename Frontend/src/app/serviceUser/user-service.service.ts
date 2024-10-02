import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetailsService } from '../service/login-details-service.service';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService implements OnInit {
  constructor(
    private http: HttpClient,
    private serviceLogin: LoginDetailsService
  ) {}
  username!: string;
  password!: string;

  ngOnInit() {
    this.username;
    this.password;
  }

  public login(u: string, p: string) {
    this.serviceLogin.addCredentials(u, p);

    this.username = this.serviceLogin.credencial[0].username;
    this.password = this.serviceLogin.credencial[0].password;

    var urlApi = 'http://localhost:8080/single-users/';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(u + ':' + p),
    });
    return this.http.get(`${urlApi}` + `${u}` + '/' + `${p}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public getAuthByName(u: string) {
    var urlApi = 'http://localhost:8080/single-auth/';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}` + `${u}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public getAllUser() {
    var urlApi = 'http://localhost:8080/emp';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public addUser(data: any): Observable<any> {
    var urlApi = 'http://localhost:8080/add';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post(`${urlApi}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public deleteUser(id: string): Observable<any> {
    var urlApi = 'http://localhost:8080/delete';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete(`${urlApi}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public editUser(id?: string, value?: any): Observable<Object> {
    var urlApi = 'http://localhost:8080/update';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put(`${urlApi}/${id}`, value, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public singleUser(id?: string): Observable<User> {
    var urlApi = 'http://localhost:8080/single';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<User>(`${urlApi}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public singleUserUsername(us: string): Observable<User> {
    var urlApi = 'http://localhost:8080/single2';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<User>(`${urlApi}/${us}`, {
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
