import { TestBed } from '@angular/core/testing';

import {CustomLoginGuard, LoginGuard} from './login.guard';

describe('LoginGuard', () => {
  let guard: CustomLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
