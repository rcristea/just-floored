import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateFlooringComponent } from './laminate-flooring.component';

describe('LaminateFlooringComponent', () => {
  let component: LaminateFlooringComponent;
  let fixture: ComponentFixture<LaminateFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
