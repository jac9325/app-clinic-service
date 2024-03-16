import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliacionComponent } from './filiacion.component';

describe('FiliacionComponent', () => {
  let component: FiliacionComponent;
  let fixture: ComponentFixture<FiliacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiliacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiliacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
