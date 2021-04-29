import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylWf8Component } from './vinyl-wf8.component';

describe('VinylWf8Component', () => {
  let component: VinylWf8Component;
  let fixture: ComponentFixture<VinylWf8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylWf8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylWf8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
