import { TestBed } from '@angular/core/testing';

import { AuthoritiesService } from './authorities.service';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

describe('AuthoritiesService', () => {
  let service: AuthoritiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(AuthoritiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
