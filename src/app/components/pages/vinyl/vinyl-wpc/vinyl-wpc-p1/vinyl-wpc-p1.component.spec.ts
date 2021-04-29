import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylWpcP1Component } from './vinyl-wpc-p1.component';

describe('VinylWpcP1Component', () => {
  let component: VinylWpcP1Component;
  let fixture: ComponentFixture<VinylWpcP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylWpcP1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylWpcP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
