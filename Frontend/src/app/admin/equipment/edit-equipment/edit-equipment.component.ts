import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipmentServiceService } from '../../../service/equipment-service.service';
import { Equipment } from '../../../service/equipment';
@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrl: './edit-equipment.component.css',
})
export class EditEquipmentComponent implements OnInit {
  equipment: Equipment = new Equipment();
  edit: any;
  id!: string;
  temp: any;

  ename!: string;
  model!: string;
  snumber!: string;
  registration!: string;

  editForm = new FormGroup({
    ename: new FormControl('', Validators.required),
    model: new FormControl('', Validators.required),
    snumber: new FormControl('', Validators.required),
    registration: new FormControl('', Validators.required),
  });
  obj!: string;
  constructor(
    private service: EquipmentServiceService,

    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.equipment = new Equipment();

    this.id = this.route.snapshot.params['id'];
    this.service.singleEquipment(this.id).subscribe((res) => {
      this.temp = res;

      this.obj = JSON.parse(this.temp);

      this.ename = Object.values(this.obj)[1];
      this.model = Object.values(this.obj)[2];
      this.snumber = Object.values(this.obj)[3];
      this.registration = Object.values(this.obj)[4];

      this.editForm.patchValue({
        ename: this.ename,
        model: this.model,
        snumber: this.snumber,
        registration: this.registration,
      });
    });
  }
  onSubmit() {
    this.id = this.route.snapshot.params['id'];
    this.service.editEquipment(this.id, this.editForm.value).subscribe();

    this.goToList();
  }
  goToList() {
    alert(' You have successfully logged in as USER');
    this.router.navigate(['dash/equipment']);
  }
}
