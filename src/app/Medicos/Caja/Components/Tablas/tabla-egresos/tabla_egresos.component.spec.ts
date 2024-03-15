import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEgresosComponent } from './tabla_egresos.component';

describe('TablaEgresosComponent', () => {
  let component: TablaEgresosComponent;
  let fixture: ComponentFixture<TablaEgresosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaEgresosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
