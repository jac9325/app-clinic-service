import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLaboratorioComponent } from './sub-laboratorio.component';

describe('SubLaboratorioComponent', () => {
  let component: SubLaboratorioComponent;
  let fixture: ComponentFixture<SubLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubLaboratorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
