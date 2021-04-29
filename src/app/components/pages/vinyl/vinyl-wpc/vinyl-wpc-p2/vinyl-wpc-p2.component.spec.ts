import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylWpcP2Component } from './vinyl-wpc-p2.component';

describe('VinylWpcP2Component', () => {
  let component: VinylWpcP2Component;
  let fixture: ComponentFixture<VinylWpcP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylWpcP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylWpcP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
