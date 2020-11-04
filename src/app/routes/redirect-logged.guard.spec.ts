import { TestBed } from '@angular/core/testing';

import { RedirectLoggedGuard } from './redirect-logged.guard';

describe('RedirectLoggedGuard', () => {
  let guard: RedirectLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
