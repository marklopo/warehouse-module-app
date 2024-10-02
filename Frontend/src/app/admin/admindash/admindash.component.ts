import { Component, OnInit } from '@angular/core';
import { EquipmentServiceService } from '../../service/equipment-service.service';

import { InspectionServiceService } from '../../service/inspection-service.service';
import { UserServiceService } from '../../serviceUser/user-service.service';
import { User } from '../../serviceUser/user';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css',
})
export class AdmindashComponent implements OnInit {
  id!: string;
  temp: any;
  obj: any;
  countEquipment!: string;
  countUsers!: string;
  lastDate!: string;
  countError!: string;
  user!: any;
  inspection: any;
  inspectionErr: any;
  equipment: any;

  constructor(
    private serviceEq: EquipmentServiceService,
    private serviceInsp: InspectionServiceService,
    private serviceUsers: UserServiceService
  ) {}
  ngOnInit(): void {
    this.eq();
    this.users();
    this.inspections();
    this.inspectionError();
  }

  eq() {
    let resp = this.serviceEq.getAllEquipment();

    resp.subscribe((data) => {
      this.equipment = data;

      this.obj = JSON.parse(this.equipment);

      this.countEquipment = this.obj.filter((n: { id: string }) => n.id).length;
    });
  }
  users() {
    let resp = this.serviceUsers.getAllUser();

    resp.subscribe((data) => {
      this.user = data;

      this.obj = JSON.parse(this.user);
      this.countUsers = this.obj.filter((n: { id: string }) => n.id).length;
    });
  }
  inspections() {
    let resp = this.serviceInsp.getAllInspection();

    resp.subscribe((data) => {
      this.inspection = data;

      this.obj = JSON.parse(this.inspection);

      this.lastDate = this.obj[this.obj.length - 1]['date'];
    });
  }
  inspectionError() {
    let resp = this.serviceInsp.getAllInspection();

    resp.subscribe((data) => {
      this.inspectionErr = data;
      this.obj = JSON.parse(this.inspectionErr);
      this.countError = this.obj.filter(
        (val: { status: any }) => val.status === 'Nok' || val.status === 'nok'
      ).length;
    });
  }
}
