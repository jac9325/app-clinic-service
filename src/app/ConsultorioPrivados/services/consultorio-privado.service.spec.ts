import { TestBed } from '@angular/core/testing';

import { ConsultorioPrivadoService } from './consultorio-privado.service';

describe('ConsultorioPrivadoService', () => {
  let service: ConsultorioPrivadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultorioPrivadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
