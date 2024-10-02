import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoginDetailsService } from '../service/login-details-service.service';
import { UserAuth } from './userAuth';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService implements OnInit {
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

  public getAllAuthUsers() {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/users';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public addAuthUsers(data: any): Observable<any> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/add-users';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post(`${urlApi}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public deleteAuthUsers(username: string): Observable<any> {
    this.getUserAndPassword();

    var urlApi = 'http://localhost:8080/delete-users';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete(`${urlApi}/${username}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public editAuthUsers(user?: string, value?: any): Observable<Object> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/update-users';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put(`${urlApi}/${user}`, value, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public singleAuthUser(username: string): Observable<UserAuth> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/single-users';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<UserAuth>(`${urlApi}/${username}`, {
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
