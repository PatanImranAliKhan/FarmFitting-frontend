import { TestBed } from '@angular/core/testing';

import { CropInfoService } from './crop-info.service';

describe('CropInfoService', () => {
  let service: CropInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CropInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
