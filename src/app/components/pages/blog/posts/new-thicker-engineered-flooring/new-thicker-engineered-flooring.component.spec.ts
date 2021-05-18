import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewThickerEngineeredFlooringComponent } from './new-thicker-engineered-flooring.component';

describe('NewThickerEngineeredFlooringComponent', () => {
  let component: NewThickerEngineeredFlooringComponent;
  let fixture: ComponentFixture<NewThickerEngineeredFlooringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewThickerEngineeredFlooringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewThickerEngineeredFlooringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
