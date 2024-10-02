import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavForUsersComponent } from './sidenav-for-users.component';

describe('SidenavForUsersComponent', () => {
  let component: SidenavForUsersComponent;
  let fixture: ComponentFixture<SidenavForUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavForUsersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidenavForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
