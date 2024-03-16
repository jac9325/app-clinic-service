import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenMedicoComponent } from './imagen_medico.component';

describe('ImagenMedicoComponent', () => {
  let component: ImagenMedicoComponent;
  let fixture: ComponentFixture<ImagenMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenMedicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
