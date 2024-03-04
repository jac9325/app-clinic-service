import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenesComplementariosComponent } from './examenes-complementarios.component';

describe('ExamenesComplementariosComponent', () => {
  let component: ExamenesComplementariosComponent;
  let fixture: ComponentFixture<ExamenesComplementariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenesComplementariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamenesComplementariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
