import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestablecerContraseñaComponent } from './reestablecer_contraseña.component';

describe('ReestablecerContraseñaComponent', () => {
  let component: ReestablecerContraseñaComponent;
  let fixture: ComponentFixture<ReestablecerContraseñaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReestablecerContraseñaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReestablecerContraseñaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
