import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosQuirurjicosComponent } from './procedimientos-quirurjicos.component';

describe('ProcedimientosQuirurjicosComponent', () => {
  let component: ProcedimientosQuirurjicosComponent;
  let fixture: ComponentFixture<ProcedimientosQuirurjicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedimientosQuirurjicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcedimientosQuirurjicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
