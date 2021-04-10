import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateP1Component } from './laminate-p1.component';

describe('LaminateP1Component', () => {
  let component: LaminateP1Component;
  let fixture: ComponentFixture<LaminateP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
