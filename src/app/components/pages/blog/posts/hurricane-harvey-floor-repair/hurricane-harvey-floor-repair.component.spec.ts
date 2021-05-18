import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricaneHarveyFloorRepairComponent } from './hurricane-harvey-floor-repair.component';

describe('HurricaneHarveyFloorRepairComponent', () => {
  let component: HurricaneHarveyFloorRepairComponent;
  let fixture: ComponentFixture<HurricaneHarveyFloorRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurricaneHarveyFloorRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurricaneHarveyFloorRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
