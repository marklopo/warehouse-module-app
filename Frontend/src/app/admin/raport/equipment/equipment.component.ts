import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentServiceService } from '../../../service/equipment-service.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.css',
})
export class EquipmentComponent {
  equipment: any;
  obj: any;

  username!: string;
  password!: string;

  constructor(
    private service: EquipmentServiceService,

    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getEquipment() {
    let resp = this.service.getAllEquipment();

    resp.subscribe((data) => {
      this.equipment = data;

      this.obj = JSON.parse(this.equipment);
    });
  }
  deleteEquipment(id: string) {
    this.service.deleteEquipment(id).subscribe();
    this.goToList();
  }

  editEquipment(id: string) {
    this.router.navigate(['dash/edit-equipment', id]);
  }
  aadEquipment() {
    this.router.navigate(['dash/add-equipment']);
  }
  goToList() {
    this.router.navigate(['dash/admindash']);
  }
}
