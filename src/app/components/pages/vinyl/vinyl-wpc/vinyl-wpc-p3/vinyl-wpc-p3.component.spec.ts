import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylWpcP3Component } from './vinyl-wpc-p3.component';

describe('VinylWpcP3Component', () => {
  let component: VinylWpcP3Component;
  let fixture: ComponentFixture<VinylWpcP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylWpcP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylWpcP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
