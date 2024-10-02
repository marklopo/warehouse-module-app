import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  constructor(private router: Router) {}
  role = sessionStorage.getItem('user');

  clearSession(): void {
    sessionStorage.setItem('user', '');
    sessionStorage.setItem('role', '');
    sessionStorage.setItem('id', '');
    sessionStorage.setItem('enabled', '');
    this.router.navigate(['/login']);
  }
}
