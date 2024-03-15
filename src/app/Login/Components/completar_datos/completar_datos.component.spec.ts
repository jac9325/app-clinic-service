import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarDatosComponent } from './completar_datos.component';

describe('CompletarDatosComponent', () => {
  let component: CompletarDatosComponent;
  let fixture: ComponentFixture<CompletarDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletarDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletarDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
