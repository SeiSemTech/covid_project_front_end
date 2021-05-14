import { TestBed } from '@angular/core/testing';

import { VaccineLotsService } from './vaccine-lots.service';

describe('VaccineLotsService', () => {
  let service: VaccineLotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccineLotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
