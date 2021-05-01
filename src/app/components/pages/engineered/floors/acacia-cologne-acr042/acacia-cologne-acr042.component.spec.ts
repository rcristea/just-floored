import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaciaCologneAcr042Component } from './acacia-cologne-acr042.component';

describe('AcaciaCologneAcr042Component', () => {
  let component: AcaciaCologneAcr042Component;
  let fixture: ComponentFixture<AcaciaCologneAcr042Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcaciaCologneAcr042Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaciaCologneAcr042Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
