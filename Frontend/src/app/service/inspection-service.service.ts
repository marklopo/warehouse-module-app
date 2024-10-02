import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Inspect } from './inspect';
import { LoginDetailsService } from './login-details-service.service';

@Injectable({
  providedIn: 'root',
})
export class InspectionServiceService implements OnInit {
  constructor(
    private http: HttpClient,
    private serviceLogin: LoginDetailsService
  ) {}
  username!: string;
  password!: string;

  ngOnInit() {}
  public getUserAndPassword() {
    this.username = this.serviceLogin.credencial[0].username;
    this.password = this.serviceLogin.credencial[0].password;
  }
  public getAllInspection() {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/inspection';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public addInspection(data: any): Observable<any> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/add-inspection';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post(`${urlApi}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public deleteInspection(id: string): Observable<any> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/delete-inspection';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete(`${urlApi}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public editInspect(id?: string, value?: any): Observable<Object> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/update-inspection';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put(`${urlApi}/${id}`, value, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public singleInspect(id: string): Observable<Inspect> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/single-inspection';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<Inspect>(`${urlApi}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
}
