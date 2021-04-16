import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylP3Component } from './vinyl-p3.component';

describe('VinylP3Component', () => {
  let component: VinylP3Component;
  let fixture: ComponentFixture<VinylP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylP3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
