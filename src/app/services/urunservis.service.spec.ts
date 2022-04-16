import { TestBed } from '@angular/core/testing';

import { UrunservisService } from './urunservis.service';

describe('UrunservisService', () => {
  let service: UrunservisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrunservisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
