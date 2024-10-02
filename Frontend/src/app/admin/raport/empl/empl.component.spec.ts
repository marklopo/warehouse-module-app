import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplComponent } from './empl.component';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

describe('EmplComponent', () => {
  let component: EmplComponent;
  let fixture: ComponentFixture<EmplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmplComponent],
      providers: [provideHttpClient()],

      imports: [RouterModule.forRoot([]), MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
