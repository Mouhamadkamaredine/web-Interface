import { TestBed } from '@angular/core/testing';

import {AuthGuard, CustomAuthGuard} from './auth.guard';

describe('AuthGuardService', () => {
  let service: CustomAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
