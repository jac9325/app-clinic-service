import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtencionsComponent } from './list-atencions.component';

describe('ListAtencionsComponent', () => {
  let component: ListAtencionsComponent;
  let fixture: ComponentFixture<ListAtencionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAtencionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAtencionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
