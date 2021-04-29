import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylWf9Component } from './vinyl-wf9.component';

describe('VinylWf9Component', () => {
  let component: VinylWf9Component;
  let fixture: ComponentFixture<VinylWf9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylWf9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylWf9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
