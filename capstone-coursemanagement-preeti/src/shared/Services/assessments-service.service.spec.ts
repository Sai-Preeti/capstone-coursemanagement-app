import { TestBed } from '@angular/core/testing';

import { AssessmentsServiceService } from './assessments-service.service';

describe('AssessmentsServiceService', () => {
  let service: AssessmentsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
