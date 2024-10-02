import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDetailsService } from './login-details-service.service';
import { Equipment } from './equipment';

@Injectable({
  providedIn: 'root',
})
export class EquipmentServiceService implements OnInit {
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
  public getAllEquipment() {
    this.getUserAndPassword();

    var urlApi = 'http://localhost:8080/equipment';
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get(`${urlApi}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public addEquipment(data: any): Observable<any> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/add-equipment';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post(`${urlApi}`, data, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public deleteEquipment(id: string): Observable<any> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/delete-equipment';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete(`${urlApi}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  public editEquipment(id?: string, value?: any): Observable<Object> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/update-equipment';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put(`${urlApi}/${id}`, value, {
      headers,
      responseType: 'text' as 'json',
    });
  }

  public singleEquipment(id: string): Observable<Equipment> {
    this.getUserAndPassword();
    var urlApi = 'http://localhost:8080/single-equipment';

    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<Equipment>(`${urlApi}/${id}`, {
      headers,
      responseType: 'text' as 'json',
    });
  }
}
