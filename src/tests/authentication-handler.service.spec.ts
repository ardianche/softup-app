import { TestBed } from '@angular/core/testing';

import { AuthenticationHandlerService } from '../app/services/authentication-handler.service';

describe('AuthenticationHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationHandlerService = TestBed.get(AuthenticationHandlerService);
    expect(service).toBeTruthy();
  });
});
