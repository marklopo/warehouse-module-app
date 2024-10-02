import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarForUsersComponent } from './navbar-for-users.component';

describe('NavbarForUsersComponent', () => {
  let component: NavbarForUsersComponent;
  let fixture: ComponentFixture<NavbarForUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarForUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
