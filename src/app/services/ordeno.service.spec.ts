import { TestBed } from '@angular/core/testing';

import { OrdenoService } from './ordeno.service';

describe('OrdenoService', () => {
  let service: OrdenoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
