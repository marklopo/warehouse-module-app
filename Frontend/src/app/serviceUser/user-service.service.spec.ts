import { TestBed } from '@angular/core/testing';

import { UserServiceService } from './user-service.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';

describe('UserServiceService', () => {
  let service: UserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(UserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
