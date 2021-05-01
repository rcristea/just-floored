import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HickoryMojaveHir001Component } from './hickory-mojave-hir001.component';

describe('HickoryMojaveHir001Component', () => {
  let component: HickoryMojaveHir001Component;
  let fixture: ComponentFixture<HickoryMojaveHir001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HickoryMojaveHir001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HickoryMojaveHir001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
