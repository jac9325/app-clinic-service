import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenComplementarioComponent } from './examen-complementario.component';

describe('ExamenComplementarioComponent', () => {
  let component: ExamenComplementarioComponent;
  let fixture: ComponentFixture<ExamenComplementarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamenComplementarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamenComplementarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
