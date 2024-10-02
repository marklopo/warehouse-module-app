import { Component, OnInit } from '@angular/core';
import { MatIconModule, MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
  role = sessionStorage.getItem('user');
}
