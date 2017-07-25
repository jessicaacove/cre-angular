import { TestBed, inject } from '@angular/core/testing';

import { InvestorServiceService } from './investor-service.service';

describe('InvestorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestorServiceService]
    });
  });

  it('should be created', inject([InvestorServiceService], (service: InvestorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
