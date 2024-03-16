import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionesMedicasComponent } from './atenciones-medicas.component';

describe('AtencionesMedicasComponent', () => {
  let component: AtencionesMedicasComponent;
  let fixture: ComponentFixture<AtencionesMedicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionesMedicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtencionesMedicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
