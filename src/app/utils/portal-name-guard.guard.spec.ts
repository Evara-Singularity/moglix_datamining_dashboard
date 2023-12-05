import { TestBed } from '@angular/core/testing';

import { PortalNameGuardGuard } from './guard/portal-name-guard.guard';

describe('PortalNameGuardGuard', () => {
  let guard: PortalNameGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PortalNameGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
