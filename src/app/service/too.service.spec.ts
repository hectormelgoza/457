import { TestBed } from '@angular/core/testing';

import { TooService } from './too.service';

describe('TooService', () => {
  let service: TooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
