import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserAuthService } from '../../../auth-service/user-auth.service';
import { UserAuth } from '../../../auth-service/userAuth';
import { AuthoritiesService } from '../../../auth-service/authorities.service';

import { UserServiceService } from '../../../serviceUser/user-service.service';
import { User } from '../../../serviceUser/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  userAuth: UserAuth = new UserAuth();

  id!: string;
  temp: any;
  name!: string;
  fname!: string;
  division!: string;
  position!: string;
  obj!: string;
  username!: string;
  password!: string;
  enabled!: string;
  authority!: string;

  editForm = new FormGroup({
    name: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    division: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    enabled: new FormControl('', Validators.required),
    authority: new FormControl('', Validators.required),
  });

  editFormUserAuth = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    enabled: new FormControl('', Validators.required),
  });

  editFormAuth = new FormGroup({
    username: new FormControl('', Validators.required),
    authority: new FormControl('', Validators.required),
  });

  constructor(
    private service: UserServiceService,
    private serviceUsers: UserAuthService,
    private serviceAuth: AuthoritiesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];
    this.service.singleUser(this.id).subscribe((res) => {
      this.temp = res;

      this.obj = JSON.parse(this.temp);

      this.name = Object.values(this.obj)[1];
      this.fname = Object.values(this.obj)[2];
      this.division = Object.values(this.obj)[3];
      this.position = Object.values(this.obj)[4];
      this.username = Object.values(this.obj)[5];
      this.password = Object.values(this.obj)[6];
      this.enabled = Object.values(this.obj)[7];
      this.authority = Object.values(this.obj)[8];
      this.editForm.patchValue({
        name: this.name,
        fname: this.fname,
        division: this.division,
        position: this.position,
        username: this.username,
        password: this.password,
        enabled: this.enabled,
        authority: this.authority,
      });
    });
  }
  edit() {
    this.id = this.route.snapshot.params['id'];
    this.service.editUser(this.id, this.editForm.value).subscribe();

    this.editUserAuth();
    this.editAuth();
    this.goToList();
  }
  goToList() {
    this.router.navigate(['/dash/users']);
  }
  editUserAuth() {
    this.editFormUserAuth.patchValue({
      enabled: this.user.enabled,
      password: this.user.password,
      username: this.user.username,
    });
    let u = this.user.username;

    this.serviceUsers.editAuthUsers(u, this.editFormUserAuth.value).subscribe();
  }
  editAuth() {
    let u = this.user.username;
    this.editFormAuth.patchValue({
      username: this.user.username,
      authority: this.user.authority,
    });

    this.serviceAuth.editAuth(u, this.editFormAuth.value).subscribe();
  }
}
