import { TestBed } from '@angular/core/testing';

import { MedicalCentersService } from './medical-centers.service';

describe('VaccinesShipmentService', () => {
  let service: MedicalCentersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalCentersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
