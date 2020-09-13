import { TestBed } from '@angular/core/testing';

import { SpotyfyTokenService } from './spotyfy-token.service';

describe('SpotyfyTokenService', () => {
  let service: SpotyfyTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotyfyTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
