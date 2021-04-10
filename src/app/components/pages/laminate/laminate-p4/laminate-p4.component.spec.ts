import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateP4Component } from './laminate-p4.component';

describe('LaminateP4Component', () => {
  let component: LaminateP4Component;
  let fixture: ComponentFixture<LaminateP4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateP4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateP4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
