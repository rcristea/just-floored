import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateP2Component } from './laminate-p2.component';

describe('LaminateP2Component', () => {
  let component: LaminateP2Component;
  let fixture: ComponentFixture<LaminateP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
