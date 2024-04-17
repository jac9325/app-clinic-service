import { TestBed } from '@angular/core/testing';

import { DatosModalService } from './datos-modal.service';

describe('DatosModalService', () => {
  let service: DatosModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
