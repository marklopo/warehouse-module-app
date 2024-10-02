import { TestBed } from '@angular/core/testing';

import { EquipmentServiceService } from './equipment-service.service';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';

describe('EquipmentServiceService', () => {
  let service: EquipmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(EquipmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
