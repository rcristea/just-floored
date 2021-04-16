import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylP2Component } from './vinyl-p2.component';

describe('VinylP2Component', () => {
  let component: VinylP2Component;
  let fixture: ComponentFixture<VinylP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylP2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
