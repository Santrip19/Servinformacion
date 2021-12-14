import { TestBed } from '@angular/core/testing';

import { GitubService } from './gitub.service';

describe('GitubService', () => {
  let service: GitubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
