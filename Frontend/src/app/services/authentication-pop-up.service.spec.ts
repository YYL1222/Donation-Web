import { TestBed } from '@angular/core/testing';

import { AuthenticationPopUpService } from './authentication-pop-up.service';

describe('AuthenticationPopUpService', () => {
  let service: AuthenticationPopUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationPopUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
