import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientosQuirurgicosComponent } from './procedimientos-quirurgicos.component';

describe('ProcedimientosQuirurgicosComponent', () => {
  let component: ProcedimientosQuirurgicosComponent;
  let fixture: ComponentFixture<ProcedimientosQuirurgicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedimientosQuirurgicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProcedimientosQuirurgicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
