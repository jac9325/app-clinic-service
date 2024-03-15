import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaAbiertaComponent } from './caja-abierta.component';

describe('CajaAbiertaComponent', () => {
  let component: CajaAbiertaComponent;
  let fixture: ComponentFixture<CajaAbiertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaAbiertaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaAbiertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
