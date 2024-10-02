import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../../serviceUser/user-service.service';
import { AuthoritiesService } from '../../../auth-service/authorities.service';
import { UserAuthService } from '../../../auth-service/user-auth.service';
import { User } from '../../../serviceUser/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  userForm!: FormGroup;
  authForm!: FormGroup;
  employeeForm!: FormGroup;

  data: any;
  data2: any;

  constructor(
    private service: UserServiceService,
    private serviceAuth: AuthoritiesService,
    private servicUser: UserAuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      fname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      division: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      authority: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      enabled: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
    this.userForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),

      enabled: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
    this.authForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),

      authority: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }
  onSubmit() {
    this.data = this.employeeForm.value;

    this.service.addUser(this.data).subscribe((resp) => {});
    this.addUser();
    this.addAuth();
    this.goToList();
  }
  addUser() {
    this.userForm.patchValue({
      enabled: this.employeeForm.controls['enabled'].getRawValue(),

      password: this.employeeForm.controls['password'].getRawValue(),
      username: this.employeeForm.controls['username'].getRawValue(),
    });
    this.data = this.userForm.value;
    this.servicUser.addAuthUsers(this.data).subscribe();
  }
  addAuth() {
    this.authForm.patchValue({
      username: this.employeeForm.controls['username'].getRawValue(),
      authority: this.employeeForm.controls['authority'].getRawValue(),
    });
    this.data2 = this.authForm.value;

    this.serviceAuth.addAuth(this.data2).subscribe();
  }

  goToList() {
    this.router.navigate(['/dash/users']);
  }
}
