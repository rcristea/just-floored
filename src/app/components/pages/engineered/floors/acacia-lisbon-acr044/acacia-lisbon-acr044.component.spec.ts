import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaciaLisbonAcr044Component } from './acacia-lisbon-acr044.component';

describe('AcaciaLisbonAcr044Component', () => {
  let component: AcaciaLisbonAcr044Component;
  let fixture: ComponentFixture<AcaciaLisbonAcr044Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcaciaLisbonAcr044Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcaciaLisbonAcr044Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
