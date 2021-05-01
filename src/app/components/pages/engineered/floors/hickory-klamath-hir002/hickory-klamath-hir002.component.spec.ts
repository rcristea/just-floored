import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HickoryKlamathHir002Component } from './hickory-klamath-hir002.component';

describe('HickoryKlamathHir002Component', () => {
  let component: HickoryKlamathHir002Component;
  let fixture: ComponentFixture<HickoryKlamathHir002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HickoryKlamathHir002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HickoryKlamathHir002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
