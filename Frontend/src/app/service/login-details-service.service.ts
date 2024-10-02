import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginDetailsService {
  constructor() {}
  username!: string;
  password!: string;
  credencial: { username: string; password: string }[] = [];
  data: any = [];
  addCredentials(us: string, pd: string) {
    this.credencial.push({ username: us, password: pd });
  }

  removeCredencial(u: any) {
    const remove = this.data.indexOf(u);
    if (remove > -1) {
      this.credencial.splice(remove, 1);
    }
  }
  public loginDetails(username: string, password: string) {
    this.removeCredencial(username);
    this.removeCredencial(password);
    this.addCredentials(username, password);
    this.username = this.credencial[0].username;
    this.password = this.credencial[0].password;
  }
  //   return { username, password };
  //}
  // uniqe: any = [];
  // addCredentials(user: string, password: string) {
  //   this.credencial.push({ user: user, password: password });
  // }
  // getWaypointUser() {}
  // removeCredencial(u: any) {
  //   const toRemove = this.credencial.indexOf(u);
  //   if (toRemove > -1) {
  //     this.credencial.splice(toRemove, 1);
  //   }
  // }
  // public loginDetails(username: string, password: string) {
  //   this.removeCredencial(username);
  //   this.removeCredencial(password);
  //   this.addCredentials(username, password);
  //   this.username = this.credencial[0].user;
  //   this.password = this.credencial[0].password;

  //   return { username, password };
  //}
}
