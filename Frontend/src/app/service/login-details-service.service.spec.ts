import { TestBed } from '@angular/core/testing';
import { LoginDetailsService } from './login-details-service.service';

describe('LoginDetailsServiceService', () => {
  let service: LoginDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
