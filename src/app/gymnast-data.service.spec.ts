import { TestBed } from '@angular/core/testing';

import { GymnastDataService } from './gymnast-data.service';

describe('GymnastDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymnastDataService = TestBed.get(GymnastDataService);
    expect(service).toBeTruthy();
  });
});
