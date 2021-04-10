import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaminateComponent } from './laminate.component';

describe('LaminateComponent', () => {
  let component: LaminateComponent;
  let fixture: ComponentFixture<LaminateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaminateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaminateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
