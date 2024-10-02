import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmindashComponent } from './admindash.component';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

describe('AdmindashComponent', () => {
  let component: AdmindashComponent;
  let fixture: ComponentFixture<AdmindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmindashComponent],
      providers: [provideHttpClient()],
      imports: [
        RouterModule.forRoot([]),
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCard,
        MatCardTitle,
        MatCardSubtitle,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdmindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
