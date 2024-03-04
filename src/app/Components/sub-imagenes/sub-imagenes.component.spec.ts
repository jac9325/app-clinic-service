import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubImagenesComponent } from './sub-imagenes.component';

describe('SubImagenesComponent', () => {
  let component: SubImagenesComponent;
  let fixture: ComponentFixture<SubImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubImagenesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
