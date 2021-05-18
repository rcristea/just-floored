import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrendsInFlooringComponent } from './new-trends-in-flooring.component';

describe('NewTrendsInFlooringComponent', () => {
  let component: NewTrendsInFlooringComponent;
  let fixture: ComponentFixture<NewTrendsInFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrendsInFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrendsInFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
