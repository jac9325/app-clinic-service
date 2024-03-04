import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaPacienteComponent } from './cuenta_paciente.component';

describe('CuentaPacienteComponent', () => {
  let component: CuentaPacienteComponent;
  let fixture: ComponentFixture<CuentaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentaPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuentaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
