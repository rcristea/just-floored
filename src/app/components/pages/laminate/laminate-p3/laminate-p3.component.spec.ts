import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateP3Component } from './laminate-p3.component';

describe('LaminateP3Component', () => {
  let component: LaminateP3Component;
  let fixture: ComponentFixture<LaminateP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
