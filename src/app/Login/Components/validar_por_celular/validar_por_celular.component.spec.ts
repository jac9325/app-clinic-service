import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarPorCelularComponent } from './validar_por_celular.component';

describe('ValidarPorCelularComponent', () => {
  let component: ValidarPorCelularComponent;
  let fixture: ComponentFixture<ValidarPorCelularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarPorCelularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarPorCelularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
