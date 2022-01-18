import { TestBed } from '@angular/core/testing';

import { UsgsService } from './usgs.service';

describe('UsgsService', () => {
  let service: UsgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
