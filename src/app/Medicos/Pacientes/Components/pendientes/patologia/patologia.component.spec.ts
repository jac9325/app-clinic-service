import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatologiaComponent } from './patologia.component';

describe('PatologiaComponent', () => {
  let component: PatologiaComponent;
  let fixture: ComponentFixture<PatologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatologiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
