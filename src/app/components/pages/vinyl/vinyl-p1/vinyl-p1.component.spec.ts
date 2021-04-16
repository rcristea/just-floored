import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylP1Component } from './vinyl-p1.component';

describe('VinylP1Component', () => {
  let component: VinylP1Component;
  let fixture: ComponentFixture<VinylP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
