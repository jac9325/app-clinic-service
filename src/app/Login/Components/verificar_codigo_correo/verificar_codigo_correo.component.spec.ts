import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarCodigoCorreoComponent } from './verificar_codigo_correo.component';

describe('VerificarCodigoCorreoComponent', () => {
  let component: VerificarCodigoCorreoComponent;
  let fixture: ComponentFixture<VerificarCodigoCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificarCodigoCorreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificarCodigoCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
