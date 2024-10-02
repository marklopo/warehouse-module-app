import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionComponent } from './inspection.component';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

describe('InspectionComponent', () => {
  let component: InspectionComponent;
  let fixture: ComponentFixture<InspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspectionComponent],

      providers: [provideHttpClient()],
      imports: [RouterModule.forRoot([]), MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
