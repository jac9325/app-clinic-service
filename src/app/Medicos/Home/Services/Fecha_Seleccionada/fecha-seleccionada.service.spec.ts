import { TestBed } from '@angular/core/testing';

import { FechaSeleccionadaService } from './fecha-seleccionada.service';

describe('FechaSeleccionadaService', () => {
  let service: FechaSeleccionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaSeleccionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
