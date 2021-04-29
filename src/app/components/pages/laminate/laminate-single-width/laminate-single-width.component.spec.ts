import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateSingleWidthComponent } from './laminate-single-width.component';

describe('LaminateSingleWidthComponent', () => {
  let component: LaminateSingleWidthComponent;
  let fixture: ComponentFixture<LaminateSingleWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateSingleWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateSingleWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
