import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HickoryOmakHir003Component } from './hickory-omak-hir003.component';

describe('HickoryOmakHir003Component', () => {
  let component: HickoryOmakHir003Component;
  let fixture: ComponentFixture<HickoryOmakHir003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HickoryOmakHir003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HickoryOmakHir003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
