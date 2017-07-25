import { TestBed, inject } from '@angular/core/testing';

import { LenderService } from './lender.service';

describe('LenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LenderService]
    });
  });

  it('should be created', inject([LenderService], (service: LenderService) => {
    expect(service).toBeTruthy();
  }));
});
