import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAtencionComponent } from './nueva-atencion.component';

describe('NuevaAtencionComponent', () => {
  let component: NuevaAtencionComponent;
  let fixture: ComponentFixture<NuevaAtencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevaAtencionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevaAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
