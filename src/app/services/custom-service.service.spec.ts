import { TestBed } from '@angular/core/testing';

import { CustomServiceService } from './custom-service.service';

describe('CustomServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomServiceService = TestBed.get(CustomServiceService);
    expect(service).toBeTruthy();
  });
});
