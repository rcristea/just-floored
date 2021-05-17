import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuxuryVinylPlanksFlooringInstallationComponent } from './luxury-vinyl-planks-flooring-installation.component';

describe('LuxuryVinylPlanksFlooringInstallationComponent', () => {
  let component: LuxuryVinylPlanksFlooringInstallationComponent;
  let fixture: ComponentFixture<LuxuryVinylPlanksFlooringInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuxuryVinylPlanksFlooringInstallationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuxuryVinylPlanksFlooringInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
