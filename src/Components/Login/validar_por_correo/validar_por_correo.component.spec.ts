import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPorCorreoComponent } from './validar_por_correo.component';

describe('ValidarPorCorreoComponent', () => {
  let component: ValidarPorCorreoComponent;
  let fixture: ComponentFixture<ValidarPorCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarPorCorreoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarPorCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
