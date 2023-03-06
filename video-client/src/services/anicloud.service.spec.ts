import { TestBed } from '@angular/core/testing';

import { AnicloudService } from './anicloud.service';

describe('AnicloudService', () => {
  let service: AnicloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnicloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
