import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { UserAuthService } from '../../../auth-service/user-auth.service';
import { UserServiceService } from '../../../serviceUser/user-service.service';

@Component({
  selector: 'app-empl',
  templateUrl: './empl.component.html',
  styleUrl: './empl.component.css',
})
export class EmplComponent implements OnInit {
  customers: any;
  obj: any;
  username!: string;
  password!: string;

  constructor(
    private service: UserServiceService,
    private serviceAuth: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getCustomers() {
    let resp = this.service.getAllUser();

    resp.subscribe((data) => {
      this.customers = data;

      this.obj = JSON.parse(this.customers);
    });
  }
  deleteCust(id: string) {
    this.service.deleteUser(id).subscribe();
  }

  editCust(id: string) {
    this.router.navigate(['dash/edit-user', id]);
  }
  aadCust() {
    this.router.navigate(['dash/add-user']);
  }
  deleteAuth(user: string) {
    this.serviceAuth.deleteAuthUsers(user).subscribe();
  }
}
