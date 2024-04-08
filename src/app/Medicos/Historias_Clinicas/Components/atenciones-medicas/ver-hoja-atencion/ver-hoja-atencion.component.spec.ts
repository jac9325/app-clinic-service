import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHojaAtencionComponent } from './ver-hoja-atencion.component';

describe('VerHojaAtencionComponent', () => {
  let component: VerHojaAtencionComponent;
  let fixture: ComponentFixture<VerHojaAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerHojaAtencionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerHojaAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
