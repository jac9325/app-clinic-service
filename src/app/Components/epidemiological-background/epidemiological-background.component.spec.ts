import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpidemiologicalBackgroundComponent } from './epidemiological-background.component';

describe('EpidemiologicalBackgroundComponent', () => {
  let component: EpidemiologicalBackgroundComponent;
  let fixture: ComponentFixture<EpidemiologicalBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpidemiologicalBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EpidemiologicalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
