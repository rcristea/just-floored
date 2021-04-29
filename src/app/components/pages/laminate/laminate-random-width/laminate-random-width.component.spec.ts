import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateRandomWidthComponent } from './laminate-random-width.component';

describe('LaminateRandomWidthComponent', () => {
  let component: LaminateRandomWidthComponent;
  let fixture: ComponentFixture<LaminateRandomWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateRandomWidthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateRandomWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
