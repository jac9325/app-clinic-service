import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHojaAtencionComponent } from './editar-hoja-atencion.component';

describe('EditarHojaAtencionComponent', () => {
  let component: EditarHojaAtencionComponent;
  let fixture: ComponentFixture<EditarHojaAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarHojaAtencionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarHojaAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
