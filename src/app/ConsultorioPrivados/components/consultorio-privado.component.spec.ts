import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultorioPrivadoComponent } from './consultorio-privado.component';

describe('ConsultorioPrivadoComponent', () => {
  let component: ConsultorioPrivadoComponent;
  let fixture: ComponentFixture<ConsultorioPrivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultorioPrivadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultorioPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
