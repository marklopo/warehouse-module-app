import { TestBed } from '@angular/core/testing';

import { InspectionServiceService } from './inspection-service.service';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

describe('InspectionServiceService', () => {
  let service: InspectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(InspectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
