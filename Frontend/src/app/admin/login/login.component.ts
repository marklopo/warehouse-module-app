import { Component, OnInit, signal } from '@angular/core';

import { Router } from '@angular/router';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../serviceUser/user-service.service';

//import { authenticationGuard } from '../guard/authentication.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [LoginComponent],
})
export class LoginComponent implements OnInit {
  constructor(private service: UserServiceService, private router: Router) {}
  username!: string;
  password!: string;
  userCredencials!: FormGroup;
  form1!: FormGroup;
  userData: any;
  auth: any;
  id!: any;
  temp: any;
  obj: any;
  name: any;
  enabled: any;
  u!: string;
  role: any;

  ngOnInit() {
    this.form1 = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
    this.userCredencials = new FormGroup({
      id: new FormControl('', Validators.required),
      enabled: new FormControl('', Validators.required),
      authority: new FormControl('', Validators.required),
    });
  }

  doLogin() {
    sessionStorage.clear();
    sessionStorage.setItem('user', '');
    sessionStorage.setItem('enabled', '');
    var username = this.form1.value.username;

    var password = this.form1.value.password;
    let resp = this.service.login(username, password);

    resp.subscribe((data) => {
      this.temp = data;
      this.obj = JSON.parse(this.temp);
      this.name = Object.values(this.obj)[1];
      this.enabled = Object.values(this.obj)[3];

      if (this.name == username && this.enabled == true) {
        sessionStorage.setItem('user', username);
        sessionStorage.setItem('enabled', this.enabled);
        this.addLoggedUserToRaportOfInspection();
        var role: string = this.obj.authority.authority;

        switch (role) {
          case 'ROLE_ADMIN': {
            alert(' You have successfully logged in as ADMIN');

            this.router.navigate(['/dash/admindash']);
            break;
          }
          case 'ROLE_USER': {
            alert(' You have successfully logged in as USER');
            this.router.navigate(['userdash/user']);
            break;
          }
          default: {
            alert('Wrong login or password ');
            this.router.navigate(['/login']);
            break;
          }
        }
      }
    });
  }
  addLoggedUserToRaportOfInspection() {
    this.u = this.form1.controls['username'].getRawValue();

    this.service.singleUserUsername(this.u).subscribe((res) => {
      this.temp = res;
      this.obj = JSON.parse(this.temp);
      this.id = Object.values(this.obj)[0];
      sessionStorage.setItem('id', this.id);
      this.role = Object.values(this.obj)[7];
      sessionStorage.setItem('role', this.role);
    });
  }
}
