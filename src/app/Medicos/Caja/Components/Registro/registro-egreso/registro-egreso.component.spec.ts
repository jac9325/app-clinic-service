import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEgresoComponent } from './registro-egreso.component';

describe('RegistroEgresoComponent', () => {
  let component: RegistroEgresoComponent;
  let fixture: ComponentFixture<RegistroEgresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEgresoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroEgresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
