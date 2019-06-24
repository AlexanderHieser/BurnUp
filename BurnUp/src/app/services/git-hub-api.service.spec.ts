import { TestBed } from '@angular/core/testing';

import { GitHubAPIService } from './git-hub-api.service';

describe('GitHubAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubAPIService = TestBed.get(GitHubAPIService);
    expect(service).toBeTruthy();
  });
});
