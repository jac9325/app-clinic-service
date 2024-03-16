import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaInformacionComponent } from './hoja-informacion.component';

describe('HojaInformacionComponent', () => {
  let component: HojaInformacionComponent;
  let fixture: ComponentFixture<HojaInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaInformacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HojaInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
