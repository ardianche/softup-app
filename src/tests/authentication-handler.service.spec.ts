import { TestBed } from '@angular/core/testing';

import { AuthenticationHandlerService } from './authentication-handler.service';

describe('AuthenticationHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationHandlerService = TestBed.get(AuthenticationHandlerService);
    expect(service).toBeTruthy();
  });
});
