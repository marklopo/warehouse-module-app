import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InspectionServiceService } from '../../../service/inspection-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrl: './inspection.component.css',
})
export class InspectionComponent {
  inspection: any;
  obj: any;
  username!: string;
  password!: string;

  constructor(
    private service: InspectionServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getInspection() {
    let resp = this.service.getAllInspection();

    resp.subscribe((data) => {
      this.inspection = data;

      this.obj = JSON.parse(this.inspection);
    });
  }
  deleteInspection(id: string) {
    this.service.deleteInspection(id).subscribe();
    this.getInspection();
  }
  editInspection(id: string) {
    this.router.navigate(['edit-inspection', id]);
  }
  aadInspection() {
    this.router.navigate(['dash/add-inspection']);
  }
}
