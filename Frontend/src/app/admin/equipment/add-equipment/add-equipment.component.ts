import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EquipmentServiceService } from '../../../service/equipment-service.service';
import { Equipment } from '../../../service/equipment';
@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrl: './add-equipment.component.css',
})
export class AddEquipmentComponent {
  equipment: Equipment = new Equipment();
  equipmentForm!: FormGroup;

  data: any;
  constructor(
    private service: EquipmentServiceService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.equipmentForm = new FormGroup({
      ename: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      model: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      snumber: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
      registration: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
      ]),
    });
  }
  onSubmit() {
    this.data = this.equipmentForm.value;

    this.service.addEquipment(this.data).subscribe((resp) => {
      this.goToList();
    });
  }
  goToList() {
    this.router.navigate(['/dash/admindash']);
  }
}
