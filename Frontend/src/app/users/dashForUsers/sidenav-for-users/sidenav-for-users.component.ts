import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-for-users',
  templateUrl: './sidenav-for-users.component.html',
  styleUrl: './sidenav-for-users.component.css',
})
export class SidenavForUsersComponent {
  role = sessionStorage.getItem('user');
  clearSession() {
    sessionStorage.clear();
  }
}
