import { TestBed } from '@angular/core/testing';

import { Covid19ServicesService } from './covid19-services.service';

describe('Covid19ServicesService', () => {
  let service: Covid19ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
