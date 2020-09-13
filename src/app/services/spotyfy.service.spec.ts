import { TestBed } from '@angular/core/testing';

import { SpotyfyService } from './spotyfy.service';

describe('SpotyfyService', () => {
  let service: SpotyfyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotyfyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
