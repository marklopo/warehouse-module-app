import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EquipmentServiceService } from '../../service/equipment-service.service';
import { Equipment } from '../../service/equipment';
import { InspectionServiceService } from '../../service/inspection-service.service';

import { User } from '../../serviceUser/user';
import { UserServiceService } from '../../serviceUser/user-service.service';
import { Session } from 'inspector';

@Component({
  selector: 'app-insp',
  templateUrl: './insp.component.html',
  styleUrl: './insp.component.css',
})
export class InspComponent {
  inspection: any;

  data: any;
  n: any;
  currentDate = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en');

  type: any;

  raport: any;
  isInputShown!: boolean;
  obj: any;
  equipment!: object;
  id: any;

  temp: any;
  ename: any;
  model: any;
  snumber: any;
  registration: any;
  editForm: any;
  idEq: any;
  user!: User;
  name: any;
  fname: any;
  division: any;
  position: any;
  username!: string;
  password!: string;
  enabled!: string;
  authority!: string;
  editForm2: any;

  constructor(
    private service: InspectionServiceService,
    private userService: UserServiceService,
    private equipmentService: EquipmentServiceService,

    private router: Router
  ) {}
  inspectionForm = new FormGroup({
    id1: new FormControl('', [Validators.required]),
    id2: new FormControl('', [Validators.required]),
    date: new FormControl(this.currentDate, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    fname: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
    position: new FormControl('', [Validators.required]),
    ename: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    snumber: new FormControl('', [Validators.required]),
    registration: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required]),
    body2: new FormControl('', [Validators.required]),
    wheel: new FormControl('', [Validators.required]),
    light: new FormControl('', [Validators.required]),
    horn: new FormControl('', [Validators.required]),
    belt: new FormControl('', [Validators.required]),
    brake: new FormControl('', [Validators.required]),
    leak: new FormControl('', [Validators.required]),
    battery: new FormControl('', [Validators.required]),
    wheel2: new FormControl('', [Validators.required]),
    light2: new FormControl('', [Validators.required]),
    horn2: new FormControl('', [Validators.required]),
    belt2: new FormControl('', [Validators.required]),
    brake2: new FormControl('', [Validators.required]),
    leak2: new FormControl('', [Validators.required]),
    battery2: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    comments: new FormControl('', [Validators.required]),
  });
  inspectionStatus = this.inspectionForm.controls['status'];
  inspectionBody = this.inspectionForm.controls['body'];
  inspectionBody2 = this.inspectionForm.controls['body2'];
  inspectionLight = this.inspectionForm.controls['light'];
  inspectionLight2 = this.inspectionForm.controls['light2'];
  inspectionWheel = this.inspectionForm.controls['wheel'];
  inspectionWheel2 = this.inspectionForm.controls['wheel2'];
  inspectionHorn = this.inspectionForm.controls['horn'];
  inspectionHorn2 = this.inspectionForm.controls['horn2'];
  inspectionBelt = this.inspectionForm.controls['belt'];
  inspectionBelt2 = this.inspectionForm.controls['belt2'];
  inspectionBrake = this.inspectionForm.controls['brake'];
  inspectionBrake2 = this.inspectionForm.controls['brake2'];
  inspectionLeak = this.inspectionForm.controls['leak'];
  inspectionLeak2 = this.inspectionForm.controls['leak2'];
  inspectionBattery = this.inspectionForm.controls['battery'];
  inspectionBattery2 = this.inspectionForm.controls['battery2'];
  name2 = this.inspectionForm.controls['name'];
  fname2 = this.inspectionForm.controls['fname'];
  division2 = this.inspectionForm.controls['division'];
  position2 = this.inspectionForm.controls['position'];
  statusNok = 'Nok';
  statusOk = 'Ok';
  notChecked = 'Not checked';
  status!: string;

  checkStatus(e: Event): void {
    const value = String((e.target as HTMLInputElement).value);
    this.status = value;

    if (
      this.inspectionBody.value == this.statusNok ||
      this.inspectionBody2.value == null
    ) {
      this.inspectionBody2.setValue(this.statusNok);
    } else if (
      this.inspectionBody.value == this.statusOk ||
      this.inspectionBody2.value == null
    ) {
      this.inspectionBody2.setValue(this.statusOk);
    } else {
      this.inspectionBody2.setValue(this.notChecked);
    }
    if (
      this.inspectionLight.value == this.statusNok ||
      this.inspectionLight2.value == null
    ) {
      this.inspectionLight2.setValue(this.statusNok);
    } else if (
      this.inspectionLight.value == this.statusOk ||
      this.inspectionLight2.value == null
    ) {
      this.inspectionLight2.setValue(this.statusOk);
    } else {
      this.inspectionLight2.setValue(this.notChecked);
    }
    if (
      this.inspectionWheel.value == this.statusNok ||
      this.inspectionWheel2.value == null
    ) {
      this.inspectionWheel2.setValue(this.statusNok);
    } else if (
      this.inspectionWheel.value == this.statusOk ||
      this.inspectionWheel2.value == null
    ) {
      this.inspectionWheel2.setValue(this.statusOk);
    } else {
      this.inspectionWheel2.setValue(this.notChecked);
    }
    if (
      this.inspectionHorn.value == this.statusNok ||
      this.inspectionHorn2.value == null
    ) {
      this.inspectionHorn2.setValue(this.statusNok);
    } else if (
      this.inspectionHorn.value == this.statusOk ||
      this.inspectionHorn2.value == null
    ) {
      this.inspectionHorn2.setValue(this.statusOk);
    } else {
      this.inspectionHorn2.setValue(this.notChecked);
    }
    if (
      this.inspectionBelt.value == this.statusNok ||
      this.inspectionBelt2.value == null
    ) {
      this.inspectionBelt2.setValue(this.statusNok);
    } else if (
      this.inspectionBelt.value == this.statusOk ||
      this.inspectionBelt2.value == null
    ) {
      this.inspectionBelt2.setValue(this.statusOk);
    } else {
      this.inspectionBelt2.setValue(this.notChecked);
    }
    if (
      this.inspectionBrake.value == this.statusNok ||
      this.inspectionBrake2.value == null
    ) {
      this.inspectionBrake2.setValue(this.statusNok);
    } else if (
      this.inspectionBrake.value == this.statusOk ||
      this.inspectionBrake2.value == null
    ) {
      this.inspectionBrake2.setValue(this.statusOk);
    } else {
      this.inspectionBrake2.setValue(this.notChecked);
    }
    if (
      this.inspectionLeak.value == this.statusNok ||
      this.inspectionLeak2.value == null
    ) {
      this.inspectionLeak2.setValue(this.statusNok);
    } else if (
      this.inspectionLeak.value == this.statusOk ||
      this.inspectionLeak2.value == null
    ) {
      this.inspectionLeak2.setValue(this.statusOk);
    } else {
      this.inspectionLeak2.setValue(this.notChecked);
    }
    if (
      this.inspectionBattery.value == this.statusNok ||
      this.inspectionBattery2.value == null
    ) {
      this.inspectionBattery2.setValue(this.statusNok);
    } else if (
      this.inspectionBattery.value == this.statusOk ||
      this.inspectionBattery2.value == null
    ) {
      this.inspectionBattery2.setValue(this.statusOk);
    } else {
      this.inspectionBattery2.setValue(this.notChecked);
    }

    if (
      this.inspectionBody2.getRawValue() == this.statusNok ||
      this.inspectionLight2.getRawValue() == this.statusNok ||
      this.inspectionWheel2.getRawValue() == this.statusNok ||
      this.inspectionHorn2.getRawValue() == this.statusNok ||
      this.inspectionBelt2.getRawValue() == this.statusNok ||
      this.inspectionBrake2.getRawValue() == this.statusNok ||
      this.inspectionLeak2.getRawValue() == this.statusNok ||
      this.inspectionBattery2.getRawValue() == this.statusNok ||
      this.inspectionBody2.getRawValue() == null ||
      this.inspectionLight2.getRawValue() == null ||
      this.inspectionWheel2.getRawValue() == null ||
      this.inspectionHorn2.getRawValue() == null ||
      this.inspectionBelt2.getRawValue() == null ||
      this.inspectionBrake2.getRawValue() == null ||
      this.inspectionLeak2.getRawValue() == null ||
      this.inspectionBattery2.getRawValue() == null
    ) {
      this.inspectionStatus.setValue(this.statusNok);
    } else {
      this.inspectionStatus.setValue(this.statusOk);
    }
  }

  onSubmit() {
    if (this.inspectionStatus.value == this.statusNok) {
      this.inspectionForm.controls['comments'].setValue(
        'Equipment failure: ' +
          this.inspectionForm.controls['comments'].getRawValue()
      );
    }
    this.inspectionForm.controls['name'].getRawValue();
    this.inspectionForm.controls['fname'].getRawValue();
    this.inspectionForm.controls['division'].getRawValue();
    this.inspectionForm.controls['position'].getRawValue();

    this.data = this.inspectionForm.value;

    if (
      this.inspectionBody2.getRawValue() == this.notChecked ||
      this.inspectionLight2.getRawValue() == this.notChecked ||
      this.inspectionWheel2.getRawValue() == this.notChecked ||
      this.inspectionHorn2.getRawValue() == this.notChecked ||
      this.inspectionBelt2.getRawValue() == this.notChecked ||
      this.inspectionBrake2.getRawValue() == this.notChecked ||
      this.inspectionBattery2.getRawValue() == this.notChecked ||
      this.inspectionLeak2.getRawValue() == this.notChecked
    ) {
      alert('Please check all points');
      this.inspectionForm.controls['comments'].setValue('');
    } else {
      this.service.addInspection(this.data).subscribe((resp) => {
        this.goToList();
      });
    }
  }
  getAllEq() {
    let resp = this.equipmentService.getAllEquipment();

    resp.subscribe((data) => {
      this.inspection = data;

      this.obj = JSON.parse(this.inspection);
      let finishedValues = this.obj.filter(
        (n: { ename: string }) => n.ename
      ).length;
    });
  }
  ngOnInit(): void {
    this.getAllEq();

    this.getEquipment();
  }
  getEquipment() {
    this.equipment = new Equipment();
    this.id = this.inspectionForm.controls['registration'].getRawValue();

    this.equipmentService.singleEquipment(this.id).subscribe((res) => {
      this.temp = res;

      this.obj = JSON.parse(this.temp);

      this.ename = Object.values(this.obj)[1];
      this.model = Object.values(this.obj)[2];
      this.snumber = Object.values(this.obj)[3];

      this.inspectionForm.controls['ename'].setValue(this.ename);
      this.inspectionForm.controls['model'].setValue(this.model);
      this.inspectionForm.controls['snumber'].setValue(this.snumber);
      this.addLoggedUserToRaportOfInspection();
    });
  }

  goToList() {
    sessionStorage.getItem('role') == 'ROLE_ADMIN'
      ? this.router.navigate(['/dash/admindash'])
      : this.router.navigate(['/userdash/user']);
  }
  addLoggedUserToRaportOfInspection() {
    this.id = sessionStorage.getItem('id');
    this.userService.singleUser(this.id).subscribe((res) => {
      this.temp = res;

      this.obj = JSON.parse(this.temp);

      this.name = Object.values(this.obj)[1];
      this.fname = Object.values(this.obj)[2];
      this.division = Object.values(this.obj)[3];
      this.position = Object.values(this.obj)[4];

      this.inspectionForm.controls['name'].setValue(this.name);
      this.inspectionForm.controls['fname'].setValue(this.fname);
      this.inspectionForm.controls['division'].setValue(this.division);
      this.inspectionForm.controls['position'].setValue(this.position);
    });
  }
}
