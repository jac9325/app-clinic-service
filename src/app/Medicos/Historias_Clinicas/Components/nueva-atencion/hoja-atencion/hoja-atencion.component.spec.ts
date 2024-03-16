import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaAtencionComponent } from './hoja-atencion.component';

describe('HojaAtencionComponent', () => {
  let component: HojaAtencionComponent;
  let fixture: ComponentFixture<HojaAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaAtencionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HojaAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
