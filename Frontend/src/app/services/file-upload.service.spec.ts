import { TestBed } from '@angular/core/testing';

import { PostFileService } from './file-upload.service';

describe('PostFileService', () => {
  let service: PostFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
