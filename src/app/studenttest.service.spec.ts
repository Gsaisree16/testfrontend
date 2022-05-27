import { TestBed } from '@angular/core/testing';

import { StudenttestService } from './studenttest.service';

describe('StudenttestService', () => {
  let service: StudenttestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenttestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
