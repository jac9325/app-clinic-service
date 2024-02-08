import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdOffcanvasBasic } from './componente1.component';

describe('Componente1Component', () => {
  let component: NgbdOffcanvasBasic;
  let fixture: ComponentFixture<NgbdOffcanvasBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdOffcanvasBasic]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgbdOffcanvasBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
