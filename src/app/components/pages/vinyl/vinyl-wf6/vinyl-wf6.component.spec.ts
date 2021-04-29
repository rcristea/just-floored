import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylWf6Component } from './vinyl-wf6.component';

describe('VinylWf6Component', () => {
  let component: VinylWf6Component;
  let fixture: ComponentFixture<VinylWf6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylWf6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylWf6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
