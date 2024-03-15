import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaCerradaComponent } from './caja-cerrada.component';

describe('CajaCerradaComponent', () => {
  let component: CajaCerradaComponent;
  let fixture: ComponentFixture<CajaCerradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaCerradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaCerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
