import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspComponent } from './insp.component';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

describe('InspComponent', () => {
  let component: InspComponent;
  let fixture: ComponentFixture<InspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InspComponent],
      providers: [provideHttpClient()],
      imports: [RouterModule.forRoot([]), MatIconModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
