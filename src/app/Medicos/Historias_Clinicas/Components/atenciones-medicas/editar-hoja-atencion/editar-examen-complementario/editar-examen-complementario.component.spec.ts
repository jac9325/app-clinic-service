import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExamenComplementarioComponent } from './editar-examen-complementario.component';

describe('EditarExamenComplementarioComponent', () => {
  let component: EditarExamenComplementarioComponent;
  let fixture: ComponentFixture<EditarExamenComplementarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarExamenComplementarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarExamenComplementarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
