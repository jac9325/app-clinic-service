import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPacientesCuentaComponent} from './tabla_pacientes_cuenta.component';

describe('TablaPacientesCuentaComponent', () => {
  let component: TablaPacientesCuentaComponent;
  let fixture: ComponentFixture<TablaPacientesCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaPacientesCuentaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaPacientesCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
