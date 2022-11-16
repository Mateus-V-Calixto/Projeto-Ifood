import { TestBed } from '@angular/core/testing';

import { RestauranstsService } from './restauransts.service';

describe('RestauranstsService', () => {
  let service: RestauranstsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestauranstsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
