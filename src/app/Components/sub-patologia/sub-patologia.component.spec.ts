import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPatologiaComponent } from './sub-patologia.component';

describe('SubPatologiaComponent', () => {
  let component: SubPatologiaComponent;
  let fixture: ComponentFixture<SubPatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPatologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubPatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
