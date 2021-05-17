import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricaneMatthewFloorRepairComponent } from './hurricane-matthew-floor-repair.component';

describe('HurricaneMatthewFloorRepairComponent', () => {
  let component: HurricaneMatthewFloorRepairComponent;
  let fixture: ComponentFixture<HurricaneMatthewFloorRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HurricaneMatthewFloorRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HurricaneMatthewFloorRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
